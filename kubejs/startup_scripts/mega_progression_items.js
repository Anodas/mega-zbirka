// Mega zbirka progression. Production components, not quest rewards.
StartupEvents.registry("item", event => {
  event.create("pneumatic_mechanism").displayName("Пневмомеханізм").texture("create:item/precision_mechanism").tooltip("§7Етап 1: точна механіка Create та друкована плата PneumaticCraft.")
  event.create("steam_control_unit").displayName("Паровий блок керування").texture("modern_industrialization:item/analog_circuit").tooltip("§6Фінал етапу 0: відкриває генерацію FE, пневматику й автоматизацію етапу 1.")
  event.create("electric_control_unit").displayName("Електричний блок керування").texture("minecraft:item/repeater").tooltip("§eФінал етапу 1: New Age та пневмоелектроніка. Відкриває автоматизацію MI, AE2 та Industrial Foregoing етапу 2.")
  event.create("mekanism_control_unit").displayName("Промисловий блок Mekanism").texture("minecraft:item/comparator").tooltip("§bЕтап 2: електричний завод MI та алюмінієвий бур. Відкриває машини Mekanism.")
  event.create("nuclear_control_unit").displayName("Ядерний блок керування").texture("minecraft:item/ender_eye").tooltip("§dФінал етапу 2: відкриває хімію, ядерне виробництво та MekaSuit етапу 3.")
})
