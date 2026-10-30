// The local serialized steam attachment is retained for compatibility with placed tanks.
// Only the exposed fluid handler aggregates the completed square reservoir.
var MegaSteamDirection=Java.loadClass('net.minecraft.core.Direction')
var MegaSteamRegistries=Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
var MegaSteamInteger=Java.loadClass('net.minecraft.world.level.block.state.properties.IntegerProperty')
var MegaSteamBoxedInteger=Java.loadClass('java.lang.Integer')
var MegaSteamList=Java.loadClass('java.util.ArrayList')
global.megaSteamPart=MegaSteamInteger.create('part',0,55)
global.megaSteamFill=MegaSteamInteger.create('fill',0,16)
global.megaSteamSurface=MegaSteamInteger.create('surface',0,1)
var megaSteamLevels=[]
var megaSteamKey=p=>p.getX()+','+p.getY()+','+p.getZ()
var MegaSteamBridge=Java.loadClass('mega.steam.MegaSteamBridge')
var megaSteamLocal=entity=>MegaSteamBridge.local(entity)
var megaSteamEntity=(level,pos)=>{
  if(!level.hasChunkAt(pos))return null
  var be=level.getBlockEntity(pos)
  return be!=null && String(MegaSteamRegistries.BLOCK.getKey(level.getBlockState(pos).getBlock()))=='kubejs:steam_tank' ? be : null
}
global.megaSteamInvalidate=()=>{megaSteamLevels=[]}
global.megaSteamGroup=entity=>{
  var level=entity.getLevel(),pos=entity.getBlockPos()
  if(level==null)return {members:[entity],width:1,height:1,origin:pos}
  var time=level.levelData.gameTime,cache=null
  for(var entry of megaSteamLevels)if(entry.level==level){cache=entry;break}
  if(cache==null){cache={level:level,time:time,groups:{}};megaSteamLevels.push(cache)}
  if(cache.time!=time){cache.time=time;cache.groups={}}
  var key=megaSteamKey(pos)
  if(cache.groups[key])return cache.groups[key]
  var pending=[pos],seen={},cells=[],available={}
  // This is a bounded search of adjacent loaded tank blocks, never a world scan.
  while(pending.length && cells.length<4096){
    var p=pending.pop(),k=megaSteamKey(p)
    if(seen[k])continue
    seen[k]=true
    var be=megaSteamEntity(level,p)
    if(be==null)continue
    var cell={pos:p,entity:be,key:k};cells.push(cell);available[k]=cell
    for(var dir of MegaSteamDirection.values())pending.push(p.relative(dir))
  }
  cells.sort((a,b)=>a.pos.getY()-b.pos.getY() || a.pos.getX()-b.pos.getX() || a.pos.getZ()-b.pos.getZ())
  var complete=(origin,width,y)=>{
    for(var x=0;x<width;x++)for(var z=0;z<width;z++)if(!available[megaSteamKey(origin.offset(x,y,z))])return false
    return true
  }
  for(var cell of cells){
    if(!available[cell.key])continue
    var width=1
    for(var w=3;w>=2;w--)if(complete(cell.pos,w,0)){width=w;break}
    var height=1
    while(height<32 && complete(cell.pos,width,height))height++
    var group={members:[],width:width,height:height,origin:cell.pos}
    for(var y=0;y<height;y++)for(var x=0;x<width;x++)for(var z=0;z<width;z++){
      var pk=megaSteamKey(cell.pos.offset(x,y,z)),member=available[pk]
      group.members.push(member.entity);cache.groups[pk]=group;delete available[pk]
    }
  }
  return cache.groups[key] || {members:[entity],width:1,height:1,origin:pos}
}
global.megaSteamLocal=megaSteamLocal
global.megaSteamRefresh=entity=>{
  var group=global.megaSteamGroup(entity),level=entity.getLevel()
  if(level==null || level.isClientSide())return group
  if(group.refreshed)return group
  group.refreshed=true
  var fraction=group.members[0].attachments.get('steam').getFluidAmount()/(group.members.length*16000)
  for(var member of group.members){
    var pos=member.getBlockPos(),x=pos.getX()-group.origin.getX(),y=pos.getY()-group.origin.getY(),z=pos.getZ()-group.origin.getZ()
    var offset=group.width==1?0:group.width==2?4:20
    var part=offset+(x*group.width+z)*4+(y==0?2:0)+(y==group.height-1?1:0)
    // Steam occupies the top layers first; all members share one fill surface.
    var fill=Math.max(0,Math.min(16,Math.ceil((fraction*group.height-(group.height-1-y))*16-0.000001)))
    var belowFill=y==0?0:Math.max(0,Math.min(16,Math.ceil((fraction*group.height-(group.height-y))*16-0.000001)))
    var surface=fill>0 && (fill<16 || belowFill==0)?1:0
    var state=member.getBlockState()
    if(Number(state.getValue(global.megaSteamPart))!=part || Number(state.getValue(global.megaSteamFill))!=fill || Number(state.getValue(global.megaSteamSurface))!=surface)level.setBlock(pos,state.setValue(global.megaSteamPart,MegaSteamBoxedInteger.valueOf(part)).setValue(global.megaSteamFill,MegaSteamBoxedInteger.valueOf(fill)).setValue(global.megaSteamSurface,MegaSteamBoxedInteger.valueOf(surface)),2)
  }
  return group
}
global.megaSteamAttach=info=>{
  MegaSteamBridge.install(info,entity=>{
    var group=global.megaSteamGroup(entity)
    if(!group.javaMembers){
      var result=new MegaSteamList()
      for(var member of group.members)result.add(member)
      group.javaMembers=result
    }
    return group.javaMembers
  })
}
