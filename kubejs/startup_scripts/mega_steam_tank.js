// A real NeoForge fluid tank; stores Modern Industrialization steam.
StartupEvents.registry('block', event => {
  var Direction = Java.loadClass('net.minecraft.core.Direction')
  var sides = Java.loadClass('java.util.EnumSet').allOf(Direction)
  event.create('steam_tank')
    .displayName('Паровий бак Create')
    .hardness(3.0).resistance(6.0).soundType('metal')
    // Reuse Create's actual tank geometry and glass, with native zinc metal.
    .parentModel('kubejs:block/zinc_steam_tank')
    .property(global.megaSteamPart).property(global.megaSteamFill).property(global.megaSteamSurface)
    .defaultState(state=>state.set(global.megaSteamPart,3).set(global.megaSteamFill,0).set(global.megaSteamSurface,0))
    .textures({'0':'create:block/zinc_block','1':'create:block/zinc_block','4':'create:block/zinc_block','5':'create:block/fluid_tank_window_single','particle':'create:block/zinc_block'})
    .renderType('translucent').opaque(false).fullBlock(false)
    .tagBlock('minecraft:mineable/pickaxe')
    .item(item => item.tooltip('Бак Create з водою поруч, нагрітий пальник знизу. Вихід: пара MI.').tooltip('Об’єднання: 1×1, 2×2 або 3×3; до 32 блоків заввишки. 16 000 мВ/блок.').tooltip('Подача й відведення з будь-якого блока. ПКМ: спільний запас.'))
    .blockEntity(info => {
      info.initialData({status:'Потрібні водяний бак Create та нагрівання',produced:0,waterUsed:0})
      global.megaSteamAttach(info)
      info.serverTicking()
      info.tickFrequency(10)
      info.enableSync()
    })
    .rightClick(event => {
      if(event.level.isClientSide()) return
      var entity=event.block.entity
      if(entity==null) return
      var tank=entity.attachments.get('steam')
      var group=global.megaSteamGroup(entity),status=group.members[0].data.getString('status')
      var amount=tank.getFluidAmount(),capacity=group.members.length*16000
      event.player.displayClientMessage(Text.of('Пара: '+amount+' / '+capacity+' мВ ('+Math.round(amount*1000/capacity)/10+'%). '+group.width+'×'+group.width+'×'+group.height+'. '+status),true)
    })
})
