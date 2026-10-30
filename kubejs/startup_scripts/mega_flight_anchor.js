// Flight anchor: stage-1 tech and flight aspects; its vanilla-style beam is visual only.
StartupEvents.registry('block', event => {
  event.create('flight_anchor')
    .displayName('Якір польоту')
    .hardness(3.0).resistance(9.0).soundType('amethyst').lightLevel(10)
    .parentModel('minecraft:block/beacon')
    .opaque(false).transparent(true).renderType('cutout')
    .tagBlock('minecraft:mineable/pickaxe')
    .item(item => item.rarity('rare')
      .tooltip('§bУ чанку, де стоїть якір, кожен гравець може літати, як у творчому режимі.')
      .tooltip('§7Вийшли з чанку або якір зламано — політ вимикається, а 6 с повільного падіння рятують від удару.')
      .tooltip('§7Створюється на магічному верстаку Thaumcraft (дослідження «Магічний камінь»): електричний блок керування в центрі, деталі етапу 1 довкола, віс Aer 25, Ordo 15, Ignis 10.'))
    .blockEntity(info => {
      info.serverTicking()
      info.tickFrequency(10)
    })
})
