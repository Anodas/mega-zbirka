// Builder's blueprint: opens the BuildPrint menu with the pack's building set (setup-buildprint/buildings.py).
StartupEvents.registry('item', event => {
  event.create('builder_blueprint')
    .displayName('Креслення будівельника')
    .maxStackSize(1).rarity('uncommon')
    .tooltip('§bПКМ — список будівель: оберіть будинок, і він з’явиться напівпрозорою схемою.')
    .tooltip('§7У схемі видно, яких блоків бракує; у списку матеріалів будь-який блок можна замінити на свій варіант.')
    .tooltip('§7Будувати можна пошарово: кнопки шарів у меню або клавіші BuildPrint.')
    .tooltip('§8Свої схеми (.litematic, .schem, .nbt) кладіть у теку schematics.')
})
