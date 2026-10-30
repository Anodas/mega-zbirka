// Epic Fight Skill Tree ships its ability stone loot modifier under data/forge, which NeoForge 1.21.1 never reads,
// so stones never dropped. Same rule here: 1.5% from monsters killed by a player; bosses always drop one.
const MEGA_STONE_CHANCE = 0.015
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const $RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $MobCategory = Java.loadClass('net.minecraft.world.entity.MobCategory')
const MEGA_STONE_DROPPERS = $TagKey.create($Registries.ENTITY_TYPE, $RL.parse('epicskills:ability_stone_dropper'))
const MEGA_BOSSES = $TagKey.create($Registries.ENTITY_TYPE, $RL.parse('c:bosses'))

EntityEvents.death(event => {
  const entity = event.entity
  if (!event.source.player || entity.isPlayer()) return
  const type = entity.entityType
  const boss = type['is(net.minecraft.tags.TagKey)'](MEGA_BOSSES)
  if (!boss && !type['is(net.minecraft.tags.TagKey)'](MEGA_STONE_DROPPERS) && type.getCategory() != $MobCategory.MONSTER) return
  if (!boss && Math.random() >= MEGA_STONE_CHANCE) return
  entity.spawnAtLocation(Item.of('epicskills:ability_stone'))
})
