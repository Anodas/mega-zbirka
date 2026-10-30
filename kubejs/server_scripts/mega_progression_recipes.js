// Stage 2: automation; stage 3: chemical and nuclear technology.
ServerEvents.recipes(event => {
  const changes = [
  {
    "id": "advanced_ae:quantum_boots",
    "output": "advanced_ae:quantum_boots",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": {
          "item": "advanced_ae:quantum_alloy_plate"
        },
        "N": {
          "item": "minecraft:netherite_boots"
        },
        "P": {
          "item": "advanced_ae:quantum_processor"
        },
        "Q": {
          "item": "advanced_ae:quantum_storage_component"
        },
        "W": {
          "item": "ae2:wireless_access_point"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@WP",
        "PNP",
        "AQA"
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_boots"
      }
    }
  },
  {
    "id": "advanced_ae:quantum_boots_item_reset",
    "output": "advanced_ae:quantum_boots",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": "advanced_ae:quantum_boots"
        },
        {
          "item": "kubejs:nuclear_control_unit"
        }
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_boots"
      }
    }
  },
  {
    "id": "advanced_ae:quantum_chest",
    "output": "advanced_ae:quantum_chestplate",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": {
          "item": "advanced_ae:quantum_alloy_plate"
        },
        "N": {
          "item": "minecraft:netherite_chestplate"
        },
        "P": {
          "item": "advanced_ae:quantum_processor"
        },
        "Q": {
          "item": "advanced_ae:quantum_storage_component"
        },
        "W": {
          "item": "ae2:wireless_access_point"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@WP",
        "PNP",
        "AQA"
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_chestplate"
      }
    }
  },
  {
    "id": "advanced_ae:quantum_chestplate_item_reset",
    "output": "advanced_ae:quantum_chestplate",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": "advanced_ae:quantum_chestplate"
        },
        {
          "item": "kubejs:nuclear_control_unit"
        }
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_chestplate"
      }
    }
  },
  {
    "id": "advanced_ae:quantum_helmet",
    "output": "advanced_ae:quantum_helmet",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": {
          "item": "advanced_ae:quantum_alloy_plate"
        },
        "N": {
          "item": "minecraft:netherite_helmet"
        },
        "P": {
          "item": "advanced_ae:quantum_processor"
        },
        "Q": {
          "item": "advanced_ae:quantum_storage_component"
        },
        "W": {
          "item": "ae2:wireless_access_point"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@WP",
        "PNP",
        "AQA"
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_helmet"
      }
    }
  },
  {
    "id": "advanced_ae:quantum_helmet_item_reset",
    "output": "advanced_ae:quantum_helmet",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": "advanced_ae:quantum_helmet"
        },
        {
          "item": "kubejs:nuclear_control_unit"
        }
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_helmet"
      }
    }
  },
  {
    "id": "advanced_ae:quantum_leggings",
    "output": "advanced_ae:quantum_leggings",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": {
          "item": "advanced_ae:quantum_alloy_plate"
        },
        "N": {
          "item": "minecraft:netherite_leggings"
        },
        "P": {
          "item": "advanced_ae:quantum_processor"
        },
        "Q": {
          "item": "advanced_ae:quantum_storage_component"
        },
        "W": {
          "item": "ae2:wireless_access_point"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@WP",
        "PNP",
        "AQA"
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_leggings"
      }
    }
  },
  {
    "id": "advanced_ae:quantum_leggings_item_reset",
    "output": "advanced_ae:quantum_leggings",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": "advanced_ae:quantum_leggings"
        },
        {
          "item": "kubejs:nuclear_control_unit"
        }
      ],
      "result": {
        "count": 1,
        "id": "advanced_ae:quantum_leggings"
      }
    }
  },
  {
    "id": "ae2:network/blocks/energy_energy_acceptor",
    "output": "ae2:energy_acceptor",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "a": {
          "tag": "c:ingots/iron"
        },
        "b": {
          "item": "ae2:quartz_glass"
        },
        "c": {
          "tag": "c:ingots/copper"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "pattern": [
        "@ba",
        "bcb",
        "aba"
      ],
      "result": {
        "count": 1,
        "id": "ae2:energy_acceptor"
      }
    }
  },
  {
    "id": "ae2:network/blocks/energy_vibration_chamber",
    "output": "ae2:vibration_chamber",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "a": {
          "tag": "c:ingots/iron"
        },
        "b": {
          "item": "minecraft:furnace"
        },
        "c": {
          "item": "ae2:energy_acceptor"
        },
        "d": {
          "tag": "c:ingots/copper"
        },
        "e": {
          "tag": "c:gems/fluix"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "pattern": [
        "@ed",
        "aba",
        "aca"
      ],
      "result": {
        "count": 1,
        "id": "ae2:vibration_chamber"
      }
    }
  },
  {
    "id": "ae2:network/blocks/inscribers",
    "output": "ae2:inscriber",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "a": {
          "tag": "c:ingots/iron"
        },
        "b": {
          "item": "minecraft:piston"
        },
        "c": {
          "tag": "c:ingots/copper"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "pattern": [
        "aba",
        "c@a",
        "aba"
      ],
      "result": {
        "count": 1,
        "id": "ae2:inscriber"
      }
    }
  },
  {
    "id": "fluxnetworks:flux_core",
    "output": "fluxnetworks:flux_core",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "group": "fluxnetworks",
      "pattern": [
        "@of",
        "oeo",
        "fof"
      ],
      "key": {
        "o": {
          "item": "minecraft:obsidian"
        },
        "f": {
          "item": "fluxnetworks:flux_dust"
        },
        "e": {
          "item": "minecraft:ender_eye"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "result": {
        "id": "fluxnetworks:flux_core",
        "count": 4
      }
    }
  },
  {
    "id": "gmut:module_gravitational_modulating_additional_unit",
    "output": "gmut:module_gravitational_modulating_additional_unit",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": {
          "tag": "mekanism:alloys/reinforced"
        },
        "B": {
          "item": "mekanism:module_base"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "P": {
          "tag": "c:pellets/polonium"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CA",
        "ABA",
        "PPP"
      ],
      "result": {
        "count": 1,
        "id": "gmut:module_gravitational_modulating_additional_unit"
      }
    }
  },
  {
    "id": "mekanism:meka_tool",
    "output": "mekanism:meka_tool",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "mekanism:atomic_disassembler"
        },
        "A": {
          "tag": "c:pellets/polonium"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "E": {
          "item": "mekanism:basic_induction_cell"
        },
        "P": {
          "item": "mekanism:hdpe_sheet"
        },
        "o": {
          "item": "mekanism:configurator"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@oC",
        "P#P",
        "AEA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:meka_tool"
      }
    }
  },
  {
    "id": "mekanism:mekasuit_bodyarmor",
    "output": "mekanism:mekasuit_bodyarmor",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:netherite_chestplate"
        },
        "A": {
          "tag": "c:pellets/polonium"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "E": {
          "item": "mekanism:basic_induction_cell"
        },
        "P": {
          "item": "mekanism:hdpe_sheet"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CP",
        "P#P",
        "AEA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:mekasuit_bodyarmor"
      }
    }
  },
  {
    "id": "mekanism:mekasuit_boots",
    "output": "mekanism:mekasuit_boots",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:netherite_boots"
        },
        "A": {
          "tag": "c:pellets/polonium"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "E": {
          "item": "mekanism:basic_induction_cell"
        },
        "P": {
          "item": "mekanism:hdpe_sheet"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CP",
        "P#P",
        "AEA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:mekasuit_boots"
      }
    }
  },
  {
    "id": "mekanism:mekasuit_helmet",
    "output": "mekanism:mekasuit_helmet",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:netherite_helmet"
        },
        "A": {
          "tag": "c:pellets/polonium"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "E": {
          "item": "mekanism:basic_induction_cell"
        },
        "P": {
          "item": "mekanism:hdpe_sheet"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CP",
        "P#P",
        "AEA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:mekasuit_helmet"
      }
    }
  },
  {
    "id": "mekanism:mekasuit_pants",
    "output": "mekanism:mekasuit_pants",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:netherite_leggings"
        },
        "A": {
          "tag": "c:pellets/polonium"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "E": {
          "item": "mekanism:basic_induction_cell"
        },
        "P": {
          "item": "mekanism:hdpe_sheet"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CP",
        "P#P",
        "AEA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:mekasuit_pants"
      }
    }
  },
  {
    "id": "mekanism:metallurgic_infuser",
    "output": "mekanism:metallurgic_infuser",
    "gate": "kubejs:mekanism_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "minecraft:furnace"
        },
        "I": {
          "tag": "c:ingots/iron"
        },
        "O": {
          "tag": "c:ingots/osmium"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "@": {
          "item": "kubejs:mekanism_control_unit"
        }
      },
      "pattern": [
        "@#I",
        "ROR",
        "I#I"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:metallurgic_infuser"
      }
    }
  },
  {
    "id": "mekanism:module_base",
    "output": "mekanism:module_base",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:hdpe_sheet"
        },
        "I": {
          "tag": "c:ingots/tin"
        },
        "N": {
          "tag": "c:nuggets/bronze"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@IN",
        "I#I",
        "NIN"
      ],
      "result": {
        "count": 2,
        "id": "mekanism:module_base"
      }
    }
  },
  {
    "id": "mekanism:sps_casing",
    "output": "mekanism:sps_casing",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "tag": "c:pellets/plutonium"
        },
        "A": {
          "tag": "c:pellets/polonium"
        },
        "P": {
          "item": "mekanism:hdpe_sheet"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@AP",
        "A#A",
        "PAP"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:sps_casing"
      }
    }
  },
  {
    "id": "mekanism:steel_casing",
    "output": "mekanism:steel_casing",
    "gate": "kubejs:mekanism_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "G": {
          "tag": "c:glass_blocks/cheap"
        },
        "O": {
          "tag": "c:ingots/osmium"
        },
        "S": {
          "tag": "c:ingots/steel"
        },
        "@": {
          "item": "kubejs:mekanism_control_unit"
        }
      },
      "pattern": [
        "@GS",
        "GOG",
        "SGS"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:steel_casing"
      }
    }
  },
  {
    "id": "mekanism:supercharged_coil",
    "output": "mekanism:supercharged_coil",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:laser"
        },
        "A": {
          "tag": "c:pellets/polonium"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "c": {
          "tag": "c:ingots/copper"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@cc",
        "C#C",
        "AAA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:supercharged_coil"
      }
    }
  },
  {
    "id": "mekanismgenerators:fission_reactor/casing",
    "output": "mekanismgenerators:fission_reactor_casing",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "I": {
          "tag": "c:ingots/lead"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@I ",
        "IXI",
        " I "
      ],
      "result": {
        "count": 4,
        "id": "mekanismgenerators:fission_reactor_casing"
      }
    }
  },
  {
    "id": "mekanismgenerators:reactor/controller",
    "output": "mekanismgenerators:fusion_reactor_controller",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "F": {
          "item": "mekanismgenerators:fusion_reactor_frame"
        },
        "G": {
          "tag": "c:glass_panes"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@GC",
        "FTF",
        "FFF"
      ],
      "result": {
        "count": 1,
        "id": "mekanismgenerators:fusion_reactor_controller"
      }
    }
  },
  {
    "id": "mekanismgenerators:reactor/frame",
    "output": "mekanismgenerators:fusion_reactor_frame",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "tag": "c:pellets/polonium"
        },
        "A": {
          "tag": "c:alloys/ultimate"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@#A",
        "#X#",
        "A#A"
      ],
      "result": {
        "count": 4,
        "id": "mekanismgenerators:fusion_reactor_frame"
      }
    }
  },
  {
    "id": "mekanismgenerators:turbine/casing",
    "output": "mekanismgenerators:turbine_casing",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "O": {
          "tag": "c:ingots/osmium"
        },
        "S": {
          "tag": "c:ingots/steel"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@S ",
        "SOS",
        " S "
      ],
      "result": {
        "count": 4,
        "id": "mekanismgenerators:turbine_casing"
      }
    }
  },
  {
    "id": "mekanism_extras:naquadah_reactor/controller",
    "output": "mekanism_extras:naquadah_reactor_controller",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "neoforge:conditions": [
        {
          "type": "neoforge:mod_loaded",
          "modid": "mekanismgenerators"
        }
      ],
      "type": "minecraft:crafting_shaped",
      "key": {
        "C": {
          "tag": "c:circuits/cosmic"
        },
        "F": {
          "item": "mekanism_extras:naquadah_reactor_casing"
        },
        "G": {
          "tag": "c:glass_panes"
        },
        "T": {
          "item": "mekanism_extras:absolute_chemical_tank"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@GC",
        "FTF",
        "FFF"
      ],
      "result": {
        "id": "mekanism_extras:naquadah_reactor_controller"
      }
    }
  },
  {
    "id": "mekanism_extras:naquadah_reactor/logic_adapter",
    "output": "mekanism_extras:naquadah_reactor_logic_adapter",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "neoforge:conditions": [
        {
          "type": "neoforge:mod_loaded",
          "modid": "mekanismgenerators"
        }
      ],
      "type": "minecraft:crafting_shaped",
      "key": {
        "F": {
          "item": "mekanism_extras:naquadah_reactor_casing"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@R ",
        "RFR",
        " R "
      ],
      "result": {
        "id": "mekanism_extras:naquadah_reactor_logic_adapter"
      }
    }
  },
  {
    "id": "mekanism_extras:naquadah_reactor/port",
    "output": "mekanism_extras:naquadah_reactor_port",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "neoforge:conditions": [
        {
          "type": "neoforge:mod_loaded",
          "modid": "mekanismgenerators"
        }
      ],
      "type": "minecraft:crafting_shaped",
      "key": {
        "C": {
          "tag": "c:circuits/cosmic"
        },
        "F": {
          "item": "mekanism_extras:naquadah_reactor_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@F ",
        "FCF",
        " F "
      ],
      "result": {
        "count": 4,
        "id": "mekanism_extras:naquadah_reactor_port"
      }
    }
  },
  {
    "id": "modern_industrialization:assembler_generated/electric_age/hull/advanced_machine_hull",
    "output": "modern_industrialization:advanced_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "modern_industrialization:assembler",
      "duration": 200,
      "eu": 8,
      "item_inputs": [
        {
          "amount": 2,
          "item": "modern_industrialization:silicon_battery"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:electronic_circuit"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:advanced_machine_casing"
        },
        {
          "amount": 3,
          "item": "modern_industrialization:electrum_cable"
        },
        {
          "item": "kubejs:electric_control_unit",
          "amount": 1
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:advanced_machine_hull"
        }
      ]
    }
  },
  {
    "id": "modern_industrialization:assembler_generated/electric_age/hull/highly_advanced_machine_hull",
    "output": "modern_industrialization:highly_advanced_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "modern_industrialization:assembler",
      "duration": 200,
      "eu": 8,
      "item_inputs": [
        {
          "amount": 2,
          "item": "modern_industrialization:cadmium_battery"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:processing_unit"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:highly_advanced_machine_casing"
        },
        {
          "amount": 3,
          "item": "modern_industrialization:annealed_copper_cable"
        },
        {
          "item": "kubejs:electric_control_unit",
          "amount": 1
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:highly_advanced_machine_hull"
        }
      ]
    }
  },
  {
    "id": "modern_industrialization:assembler_generated/electric_age/hull/lv_machine_hull",
    "output": "modern_industrialization:basic_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "modern_industrialization:assembler",
      "duration": 200,
      "eu": 8,
      "item_inputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:analog_circuit"
        },
        {
          "amount": 3,
          "item": "modern_industrialization:tin_cable"
        },
        {
          "amount": 2,
          "item": "modern_industrialization:redstone_battery"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:steel_machine_casing"
        },
        {
          "item": "kubejs:electric_control_unit",
          "amount": 1
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:basic_machine_hull"
        }
      ]
    }
  },
  {
    "id": "modern_industrialization:assembler_generated/electric_age/hull/quantum_machine_hull",
    "output": "modern_industrialization:quantum_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "modern_industrialization:assembler",
      "duration": 200,
      "eu": 8,
      "item_inputs": [
        {
          "amount": 2,
          "item": "modern_industrialization:plutonium_battery"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:quantum_circuit"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:quantum_machine_casing"
        },
        {
          "amount": 3,
          "item": "modern_industrialization:superconductor_cable"
        },
        {
          "item": "kubejs:electric_control_unit",
          "amount": 1
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:quantum_machine_hull"
        }
      ]
    }
  },
  {
    "id": "modern_industrialization:assembler_generated/electric_age/hull/turbo_machine_hull",
    "output": "modern_industrialization:turbo_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "modern_industrialization:assembler",
      "duration": 200,
      "eu": 8,
      "item_inputs": [
        {
          "amount": 2,
          "item": "modern_industrialization:sodium_battery"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:digital_circuit"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:turbo_machine_casing"
        },
        {
          "amount": 3,
          "item": "modern_industrialization:aluminum_cable"
        },
        {
          "item": "kubejs:electric_control_unit",
          "amount": 1
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:turbo_machine_hull"
        }
      ]
    }
  },
  {
    "id": "modern_industrialization:assembler_generated/electric_age/machine/fusion_reactor",
    "output": "modern_industrialization:fusion_reactor",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "modern_industrialization:assembler",
      "duration": 200,
      "eu": 8,
      "item_inputs": [
        {
          "amount": 6,
          "item": "modern_industrialization:fusion_chamber"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:quantum_machine_hull"
        },
        {
          "amount": 2,
          "item": "modern_industrialization:quantum_circuit"
        },
        {
          "item": "kubejs:nuclear_control_unit",
          "amount": 1
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:fusion_reactor"
        }
      ]
    }
  },
  {
    "id": "modern_industrialization:assembler_generated/electric_age/machine/nuclear_reactor",
    "output": "modern_industrialization:nuclear_reactor",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "modern_industrialization:assembler",
      "duration": 200,
      "eu": 8,
      "item_inputs": [
        {
          "amount": 4,
          "item": "modern_industrialization:nuclear_alloy_large_plate"
        },
        {
          "amount": 1,
          "item": "modern_industrialization:highly_advanced_machine_hull"
        },
        {
          "amount": 2,
          "item": "modern_industrialization:processing_unit"
        },
        {
          "amount": 2,
          "item": "modern_industrialization:cadmium_control_rod"
        },
        {
          "item": "kubejs:nuclear_control_unit",
          "amount": 1
        }
      ],
      "item_outputs": [
        {
          "amount": 1,
          "item": "modern_industrialization:nuclear_reactor"
        }
      ]
    }
  },
  {
    "id": "modern_industrialization:electric_age/hull/advanced_machine_hull_asbl",
    "output": "modern_industrialization:advanced_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@c ",
        "BCB",
        "ppp"
      ],
      "key": {
        "B": {
          "item": "modern_industrialization:silicon_battery"
        },
        "c": {
          "item": "modern_industrialization:electronic_circuit"
        },
        "C": {
          "item": "modern_industrialization:advanced_machine_casing"
        },
        "p": {
          "item": "modern_industrialization:electrum_cable"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "result": {
        "id": "modern_industrialization:advanced_machine_hull"
      }
    }
  },
  {
    "id": "modern_industrialization:electric_age/hull/highly_advanced_machine_hull_asbl",
    "output": "modern_industrialization:highly_advanced_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@c ",
        "BCB",
        "ppp"
      ],
      "key": {
        "B": {
          "item": "modern_industrialization:cadmium_battery"
        },
        "c": {
          "item": "modern_industrialization:processing_unit"
        },
        "C": {
          "item": "modern_industrialization:highly_advanced_machine_casing"
        },
        "p": {
          "item": "modern_industrialization:annealed_copper_cable"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "result": {
        "id": "modern_industrialization:highly_advanced_machine_hull"
      }
    }
  },
  {
    "id": "modern_industrialization:electric_age/hull/lv_machine_hull_asbl",
    "output": "modern_industrialization:basic_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@A ",
        "BCB",
        "ccc"
      ],
      "key": {
        "A": {
          "item": "modern_industrialization:analog_circuit"
        },
        "c": {
          "item": "modern_industrialization:tin_cable"
        },
        "B": {
          "item": "modern_industrialization:redstone_battery"
        },
        "C": {
          "item": "modern_industrialization:steel_machine_casing"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "result": {
        "id": "modern_industrialization:basic_machine_hull"
      }
    }
  },
  {
    "id": "modern_industrialization:electric_age/hull/quantum_machine_hull_asbl",
    "output": "modern_industrialization:quantum_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@c ",
        "BCB",
        "ppp"
      ],
      "key": {
        "B": {
          "item": "modern_industrialization:plutonium_battery"
        },
        "c": {
          "item": "modern_industrialization:quantum_circuit"
        },
        "C": {
          "item": "modern_industrialization:quantum_machine_casing"
        },
        "p": {
          "item": "modern_industrialization:superconductor_cable"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "result": {
        "id": "modern_industrialization:quantum_machine_hull"
      }
    }
  },
  {
    "id": "modern_industrialization:electric_age/hull/turbo_machine_hull_asbl",
    "output": "modern_industrialization:turbo_machine_hull",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@c ",
        "BCB",
        "ppp"
      ],
      "key": {
        "B": {
          "item": "modern_industrialization:sodium_battery"
        },
        "c": {
          "item": "modern_industrialization:digital_circuit"
        },
        "C": {
          "item": "modern_industrialization:turbo_machine_casing"
        },
        "p": {
          "item": "modern_industrialization:aluminum_cable"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "result": {
        "id": "modern_industrialization:turbo_machine_hull"
      }
    }
  },
  {
    "id": "modern_industrialization:electric_age/machine/fusion_reactor_asbl",
    "output": "modern_industrialization:fusion_reactor",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@CC",
        "QHQ",
        "CCC"
      ],
      "key": {
        "C": {
          "item": "modern_industrialization:fusion_chamber"
        },
        "H": {
          "item": "modern_industrialization:quantum_machine_hull"
        },
        "Q": {
          "item": "modern_industrialization:quantum_circuit"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "result": {
        "id": "modern_industrialization:fusion_reactor"
      }
    }
  },
  {
    "id": "modern_industrialization:electric_age/machine/nuclear_reactor_asbl",
    "output": "modern_industrialization:nuclear_reactor",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@cA",
        "RCR",
        "AcA"
      ],
      "key": {
        "A": {
          "item": "modern_industrialization:nuclear_alloy_large_plate"
        },
        "C": {
          "item": "modern_industrialization:highly_advanced_machine_hull"
        },
        "c": {
          "item": "modern_industrialization:processing_unit"
        },
        "R": {
          "item": "modern_industrialization:cadmium_control_rod"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "result": {
        "id": "modern_industrialization:nuclear_reactor"
      }
    }
  },
  {
    "id": "create_new_age:shaped/generator_coil",
    "output": "create_new_age:generator_coil",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": {
          "item": "create:andesite_alloy_block"
        },
        "C": {
          "tag": "c:ingots/copper"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@CC",
        "CAC",
        "CCC"
      ],
      "result": {
        "count": 1,
        "id": "create_new_age:generator_coil"
      }
    }
  },
  {
    "id": "createaddition:mechanical_crafting/alternator",
    "output": "createaddition:alternator",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "create:mechanical_crafting",
      "accept_mirrored": true,
      "category": "misc",
      "key": {
        "A": {
          "item": "create:andesite_alloy"
        },
        "I": {
          "tag": "c:plates/iron"
        },
        "R": {
          "tag": "c:rods/iron"
        },
        "S": {
          "item": "createaddition:copper_spool"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@ A  ",
        " ISI ",
        "ISRSI",
        " ISI ",
        "  A  "
      ],
      "result": {
        "count": 1,
        "id": "createaddition:alternator"
      }
    }
  },
  {
    "id": "bigreactors:reactor/basic/controller_ingots_uranium",
    "output": "bigreactors:basic_reactorcontroller",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "C": {
          "item": "bigreactors:basic_reactorcasing"
        },
        "D": {
          "tag": "c:gems/diamond"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "X": {
          "item": "minecraft:comparator"
        },
        "Y": {
          "tag": "c:ingots/uranium"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@XC",
        "YDY",
        "CRC"
      ],
      "result": {
        "count": 1,
        "id": "bigreactors:basic_reactorcontroller"
      }
    }
  },
  {
    "id": "bigreactors:reactor/basic/controller_ingots_yellorium",
    "output": "bigreactors:basic_reactorcontroller",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "C": {
          "item": "bigreactors:basic_reactorcasing"
        },
        "D": {
          "tag": "c:gems/diamond"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "X": {
          "item": "minecraft:comparator"
        },
        "Y": {
          "tag": "c:ingots/yellorium"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@XC",
        "YDY",
        "CRC"
      ],
      "result": {
        "count": 1,
        "id": "bigreactors:basic_reactorcontroller"
      }
    }
  },
  {
    "id": "bigreactors:reactor/reinforced/controller_ingots_uranium",
    "output": "bigreactors:reinforced_reactorcontroller",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "C": {
          "item": "bigreactors:reinforced_reactorcasing"
        },
        "D": {
          "tag": "c:storage_blocks/diamond"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "X": {
          "item": "minecraft:comparator"
        },
        "Y": {
          "tag": "c:ingots/uranium"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@XC",
        "YDY",
        "CRC"
      ],
      "result": {
        "count": 1,
        "id": "bigreactors:reinforced_reactorcontroller"
      }
    }
  },
  {
    "id": "bigreactors:reactor/reinforced/controller_ingots_yellorium",
    "output": "bigreactors:reinforced_reactorcontroller",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "C": {
          "item": "bigreactors:reinforced_reactorcasing"
        },
        "D": {
          "tag": "c:storage_blocks/diamond"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "X": {
          "item": "minecraft:comparator"
        },
        "Y": {
          "tag": "c:ingots/yellorium"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@XC",
        "YDY",
        "CRC"
      ],
      "result": {
        "count": 1,
        "id": "bigreactors:reinforced_reactorcontroller"
      }
    }
  },
  {
    "id": "bigreactors:turbine/basic/controller",
    "output": "bigreactors:basic_turbinecontroller",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "C": {
          "item": "bigreactors:basic_turbinecasing"
        },
        "D": {
          "tag": "c:gems/diamond"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "X": {
          "item": "minecraft:comparator"
        },
        "Y": {
          "tag": "c:storage_blocks/cyanite"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@XC",
        "YDY",
        "CRC"
      ],
      "result": {
        "count": 1,
        "id": "bigreactors:basic_turbinecontroller"
      }
    }
  },
  {
    "id": "bigreactors:turbine/reinforced/controller",
    "output": "bigreactors:reinforced_turbinecontroller",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "C": {
          "item": "bigreactors:reinforced_turbinecasing"
        },
        "D": {
          "tag": "c:storage_blocks/diamond"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "X": {
          "item": "minecraft:comparator"
        },
        "Y": {
          "tag": "c:storage_blocks/cyanite"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "@XC",
        "YDY",
        "CRC"
      ],
      "result": {
        "count": 1,
        "id": "bigreactors:reinforced_turbinecontroller"
      }
    }
  },
  {
    "id": "pneumaticcraft:air_compressor",
    "output": "pneumaticcraft:air_compressor",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "F": {
          "item": "minecraft:furnace"
        },
        "I": {
          "tag": "pneumaticcraft:reinforced_stone_bricks"
        },
        "T": {
          "item": "pneumaticcraft:pressure_tube"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "III",
        "I@T",
        "IFI"
      ],
      "result": {
        "count": 1,
        "id": "pneumaticcraft:air_compressor"
      }
    }
  },
  {
    "id": "justdirethings:gooblock_tier1",
    "output": "justdirethings:gooblock_tier1",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "group": "justdirethings",
      "key": {
        "c": {
          "item": "minecraft:clay_ball"
        },
        "f": {
          "item": "minecraft:rotten_flesh"
        },
        "s": {
          "item": "minecraft:sugar"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "pattern": [
        "csc",
        "f@f",
        "csc"
      ],
      "result": {
        "count": 1,
        "id": "justdirethings:gooblock_tier1"
      }
    }
  },
  {
    "id": "chunkloaders:basic_chunk_loader",
    "output": "chunkloaders:basic_chunk_loader",
    "gate": "kubejs:steam_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "@BA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
          "tag": "c:ingots/iron"
        },
        "B": {
          "tag": "c:obsidians"
        },
        "C": {
          "tag": "c:ender_pearls"
        },
        "@": {
          "item": "kubejs:steam_control_unit"
        }
      },
      "result": {
        "id": "chunkloaders:basic_chunk_loader"
      }
    }
  },
  {
    "id": "industrialforegoing:machine_frame_pity",
    "output": "industrialforegoing:machine_frame_pity",
    "gate": "kubejs:electric_control_unit",
    "recipe": {
      "neoforge:conditions": [
        {
          "type": "neoforge:item_exists",
          "item": "industrialforegoing:machine_frame_pity"
        }
      ],
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "I": {
          "tag": "c:ingots/iron"
        },
        "R": {
          "tag": "c:storage_blocks/redstone"
        },
        "W": {
          "tag": "minecraft:logs"
        },
        "@": {
          "item": "kubejs:electric_control_unit"
        }
      },
      "pattern": [
        "@IW",
        "IRI",
        "WIW"
      ],
      "result": {
        "count": 1,
        "id": "industrialforegoing:machine_frame_pity"
      }
    }
  },
  {
    "id": "mekanism:purification_chamber",
    "output": "mekanism:purification_chamber",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "A": {
          "tag": "mekanism:alloys/infused"
        },
        "C": {
          "tag": "c:circuits/advanced"
        },
        "O": {
          "tag": "c:ingots/osmium"
        },
        "P": {
          "item": "mekanism:enrichment_chamber"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CA",
        "OPO",
        "ACA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:purification_chamber"
      }
    }
  },
  {
    "id": "mekanism:electrolytic_separator",
    "output": "mekanism:electrolytic_separator",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:electrolytic_core"
        },
        "A": {
          "tag": "mekanism:alloys/infused"
        },
        "I": {
          "tag": "c:ingots/iron"
        },
        "R": {
          "tag": "c:dusts/redstone"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@RI",
        "A#A",
        "IRI"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:electrolytic_separator"
      }
    }
  },
  {
    "id": "mekanism:chemical_infuser",
    "output": "mekanism:chemical_infuser",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "A": {
          "tag": "mekanism:alloys/infused"
        },
        "C": {
          "tag": "c:circuits/basic"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CA",
        "TXT",
        "ACA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:chemical_infuser"
      }
    }
  },
  {
    "id": "mekanism:chemical_oxidizer",
    "output": "mekanism:chemical_oxidizer",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:dynamic_tank"
        },
        "A": {
          "tag": "mekanism:alloys/infused"
        },
        "C": {
          "tag": "c:circuits/basic"
        },
        "P": {
          "tag": "mekanism:personal_storage"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CA",
        "P#T",
        "ACA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:chemical_oxidizer"
      }
    }
  },
  {
    "id": "mekanism:chemical_injection_chamber",
    "output": "mekanism:chemical_injection_chamber",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:purification_chamber"
        },
        "A": {
          "tag": "mekanism:alloys/reinforced"
        },
        "C": {
          "tag": "c:circuits/elite"
        },
        "I": {
          "tag": "c:ingots/gold"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CA",
        "I#I",
        "ACA"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:chemical_injection_chamber"
      }
    }
  },
  {
    "id": "mekanism:chemical_dissolution_chamber",
    "output": "mekanism:chemical_dissolution_chamber",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "I": {
          "tag": "c:ingots/refined_obsidian"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@TI",
        "CXC",
        "ITI"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:chemical_dissolution_chamber"
      }
    }
  },
  {
    "id": "mekanism:chemical_washer",
    "output": "mekanism:chemical_washer",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "B": {
          "item": "mekanism:basic_fluid_tank"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "I": {
          "tag": "c:ingots/refined_obsidian"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@BI",
        "CXC",
        "ITI"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:chemical_washer"
      }
    }
  },
  {
    "id": "mekanism:chemical_crystallizer",
    "output": "mekanism:chemical_crystallizer",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": {
          "tag": "c:gems/fluorite"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "I": {
          "tag": "c:ingots/refined_obsidian"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@AI",
        "CXC",
        "IAI"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:chemical_crystallizer"
      }
    }
  },
  {
    "id": "mekanism:rotary_condensentrator",
    "output": "mekanism:rotary_condensentrator",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:basic_fluid_tank"
        },
        "C": {
          "tag": "c:circuits/basic"
        },
        "E": {
          "item": "mekanism:energy_tablet"
        },
        "G": {
          "tag": "c:glass_blocks/cheap"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@CG",
        "TE#",
        "GCG"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:rotary_condensentrator"
      }
    }
  },
  {
    "id": "mekanism:pressurized_reaction_chamber",
    "output": "mekanism:pressurized_reaction_chamber",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:dynamic_tank"
        },
        "A": {
          "tag": "mekanism:alloys/infused"
        },
        "C": {
          "tag": "c:circuits/basic"
        },
        "P": {
          "item": "mekanism:enrichment_chamber"
        },
        "S": {
          "tag": "c:ingots/steel"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@AS",
        "CPC",
        "T#T"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:pressurized_reaction_chamber"
      }
    }
  },
  {
    "id": "mekanism:solar_neutron_activator",
    "output": "mekanism:solar_neutron_activator",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:hdpe_sheet"
        },
        "A": {
          "tag": "mekanism:alloys/reinforced"
        },
        "C": {
          "tag": "c:circuits/elite"
        },
        "I": {
          "tag": "c:ingots/bronze"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@#A",
        "CXC",
        "III"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:solar_neutron_activator"
      }
    }
  },
  {
    "id": "mekanism:isotopic_centrifuge",
    "output": "mekanism:isotopic_centrifuge",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "mekanism:mek_data",
      "category": "misc",
      "key": {
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "I": {
          "tag": "c:ingots/lead"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@II",
        "CTC",
        "III"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:isotopic_centrifuge"
      }
    }
  },
  {
    "id": "mekanism:antiprotonic_nucleosynthesizer",
    "output": "mekanism:antiprotonic_nucleosynthesizer",
    "gate": "kubejs:nuclear_control_unit",
    "recipe": {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "mekanism:alloy_atomic"
        },
        "A": {
          "tag": "c:pellets/antimatter"
        },
        "C": {
          "tag": "c:circuits/ultimate"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "@": {
          "item": "kubejs:nuclear_control_unit"
        }
      },
      "pattern": [
        "@C#",
        "AXA",
        "#C#"
      ],
      "result": {
        "count": 1,
        "id": "mekanism:antiprotonic_nucleosynthesizer"
      }
    }
  }
]
  changes.forEach(change => { event.remove({id: change.id}); event.custom(change.recipe).id(change.id) })
  event.shaped('2x kubejs:pneumatic_mechanism', [' I ', 'PCP', ' I '], {I:'pneumaticcraft:ingot_iron_compressed',P:'create:precision_mechanism',C:'pneumaticcraft:printed_circuit_board'}).id('kubejs:progression/pneumatic_mechanism')
  event.shaped('4x kubejs:steam_control_unit', [' B ', 'PFP', ' C '], {B:'modern_industrialization:bronze_plate',P:'create:precision_mechanism',F:'create:brass_casing',C:'create:cogwheel'}).id('kubejs:progression/steam_control_unit')
  event.shaped('4x kubejs:electric_control_unit', [' W ', 'IPI', ' S '], {W:'create_new_age:copper_wire',I:'create_new_age:overcharged_iron',P:'kubejs:pneumatic_mechanism',S:'kubejs:steam_control_unit'}).id('kubejs:progression/electric_control_unit')
  event.shaped('8x kubejs:mekanism_control_unit', [' E ', 'CDC', ' P '], {E:'kubejs:electric_control_unit',C:'modern_industrialization:electronic_circuit',D:'modern_industrialization:aluminum_drill',P:'ae2:engineering_processor'}).id('kubejs:progression/mekanism_control_unit')
  event.shaped('4x kubejs:nuclear_control_unit', [' A ', 'PCP', ' F '], {A:'mekanism:alloy_atomic',P:'ae2:engineering_processor',C:'mekanism:ultimate_control_circuit',F:'industrialforegoing:machine_frame_advanced'}).id('kubejs:progression/nuclear_control_unit')
  console.info('[MegaProgression] Replaced '+changes.length+' production recipes; registered 5 tier components.')
})
