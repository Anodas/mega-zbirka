// Conversion is driven by actual water and Create's registered boiler heaters.
// No global world scans: at most six neighbours and a 3x3 heater footprint/10 ticks.
var MegaSteamTankBE=Java.loadClass('com.simibubi.create.content.fluids.tank.FluidTankBlockEntity')
var MegaBoilerHeater=Java.loadClass('com.simibubi.create.api.boiler.BoilerHeater')
var MegaDirection=Java.loadClass('net.minecraft.core.Direction')
var MegaFluids=Java.loadClass('net.minecraft.world.level.material.Fluids')
var MegaFluidAction=Java.loadClass('net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction')
var MegaMIConfig=Java.loadClass('aztech.modern_industrialization.config.MIServerConfig')

function megaSteamStatus(entity,status) {
  if(entity.data.getString('status')!=status) {
    entity.data.putString('status',status)
    entity.save()
  }
}

function megaCreateSteamTick(entity) {
  var level=entity.getLevel()
  if(level==null || level.isClientSide()) return
  var steam=entity.attachments.get('steam')
  if(steam==null) return
  var ratio=Math.max(1,MegaMIConfig.INSTANCE.steamPerWater.getAsInt())
  var room=steam.getCapacity()-steam.getFluidAmount()
  if(room<ratio) {megaSteamStatus(entity,'Бак заповнений — відводьте пару трубами');return}
  var status='Поставте поруч звичайний водяний бак Create'
  for(var direction of MegaDirection.values()) {
    var pos=entity.getBlockPos().relative(direction)
    if(!level.hasChunkAt(pos)) continue
    var adjacent=level.getBlockEntity(pos)
    if(!(adjacent instanceof MegaSteamTankBE)) continue
    var waterSource=adjacent.getControllerBE()
    if(waterSource==null) continue
    if(waterSource.boiler.isActive()) {
      status='Зніміть паровий двигун/свисток з водяного бака: оберіть пару або обертання'
      continue
    }
    var water=waterSource.getTankInventory()
    if(water.getFluid().getFluid()!=MegaFluids.WATER || water.getFluidAmount()<=0) {
      status='У сусідньому баку Create немає води'
      continue
    }
    var heat=0
    var origin=waterSource.getBlockPos()
    var width=waterSource.getWidth()
    for(var x=0;x<width;x++) for(var z=0;z<width;z++) {
      var heatPos=origin.offset(x,-1,z)
      if(!level.hasChunkAt(heatPos)) continue
      var raw=MegaBoilerHeater.findHeat(level,heatPos,level.getBlockState(heatPos))
      // Passive campfires/idle burners do not fuel this steam converter.
      if(raw>0) heat+=raw
    }
    heat=Math.min(Math.floor(heat),Math.max(1,Math.floor(waterSource.getTotalTankSize()/4)))
    if(heat<1) {status='Потрібен заправлений нагрітий пальник під водяним баком';continue}

    // One shared budget per Create reservoir: extra ports never multiply heat.
    var frame=Math.floor(level.levelData.gameTime/10)
    var shared=waterSource.getPersistentData()
    if(shared.getLong('MegaSteamFrame')!=frame) {
      shared.putLong('MegaSteamFrame',frame)
      shared.putInt('MegaSteamUsed',0)
    }
    var budget=heat*320-shared.getInt('MegaSteamUsed')
    var waterAmount=Math.min(Math.floor(budget/ratio),Math.floor(room/ratio),water.getFluidAmount())
    if(waterAmount<1) {status='Потужність цього бака вже використана іншими паровими виходами';continue}
    var amount=waterAmount*ratio
    if(steam.fill(Fluid.of('modern_industrialization:steam',amount),MegaFluidAction.SIMULATE)!=amount) continue
    var drained=water['drain(int,net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction)'](waterAmount,MegaFluidAction.EXECUTE).getAmount()
    if(drained<=0) continue
    amount=drained*ratio
    steam.fill(Fluid.of('modern_industrialization:steam',amount),MegaFluidAction.EXECUTE)
    shared.putInt('MegaSteamUsed',shared.getInt('MegaSteamUsed')+amount)
    waterSource.setChanged()
    entity.data.putLong('produced',entity.data.getLong('produced')+amount)
    entity.data.putLong('waterUsed',entity.data.getLong('waterUsed')+drained)
    megaSteamStatus(entity,'Працює: до '+(heat*32)+' мВ/т; вихід — пара MI')
    entity.save()
    return
  }
  megaSteamStatus(entity,status)
}

function megaSteamNetworkTick(entity) {
  var group=global.megaSteamGroup(entity),root=group.members[0],level=entity.getLevel()
  var frame=Math.floor(level.levelData.gameTime/10)
  // The large reservoir is processed once, rather than once for every tank block.
  if(root.data.getLong('networkFrame')!=frame) {
    root.data.putLong('networkFrame',frame)
    var status='Поставте поруч звичайний водяний бак Create',working=false
    for(var member of group.members) {
      var touchesWater=false
      for(var direction of MegaDirection.values()) {
        var pos=member.getBlockPos().relative(direction)
        if(level.hasChunkAt(pos) && level.getBlockEntity(pos) instanceof MegaSteamTankBE) {touchesWater=true;break}
      }
      if(!touchesWater)continue
      megaCreateSteamTick(member)
      var current=member.data.getString('status')
      if(current.startsWith('Працює:')) {status=current;working=true}
      else if(!working)status=current
    }
    megaSteamStatus(root,status)
  }
  global.megaSteamRefresh(entity)
}
BlockEvents.blockEntityTick('kubejs:steam_tank',event=>megaSteamNetworkTick(event.block.entity))


BlockEvents.placed('kubejs:steam_tank',event=>global.megaSteamInvalidate())
BlockEvents.broken('kubejs:steam_tank',event=>{
  var entity=event.block.entity
  if(entity==null)return
  var source=global.megaSteamLocal(entity),group=global.megaSteamGroup(entity)
  // Preserve the removed block's contents in free space of surviving members.
  for(var member of group.members){
    if(member==entity || source.isEmpty())continue
    var accepted=global.megaSteamLocal(member).fill(source.getFluid(),MegaFluidAction.EXECUTE)
    source['drain(int,net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction)'](accepted,MegaFluidAction.EXECUTE)
  }
  global.megaSteamInvalidate()
})

ServerEvents.recipes(event => {
  event.shaped('kubejs:steam_tank',['ZIZ','GTG','ZIZ'],{
    I:'create:iron_sheet',Z:'create:zinc_ingot',G:'minecraft:glass',T:'create:fluid_tank'
  }).id('kubejs:steam_tank')
})
