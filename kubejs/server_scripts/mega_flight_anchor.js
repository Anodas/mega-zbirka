// Flight anchor: the block marks players standing in its chunk; the player tick grants flight while the mark is fresh
// and takes back only the flight it granted itself (creative, MekaSuit and other sources stay untouched).
var MEGA_FLIGHT_GRANTED = 'megaFlightAnchorGranted'
// Marks count server ticks, so lag catch-up cannot stretch them; they live in memory, a restart starts clean.
var megaFlightTick = 0
var megaFlightUntil = {}

ServerEvents.tick(event => { megaFlightTick++ })

BlockEvents.blockEntityTick('kubejs:flight_anchor', event => {
  var entity = event.block.entity
  var pos = entity.blockPos
  var cx = pos.x >> 4, cz = pos.z >> 4
  entity.level.players.forEach(p => {
    if ((Math.floor(p.x) >> 4) == cx && (Math.floor(p.z) >> 4) == cz) megaFlightUntil[String(p.uuid)] = megaFlightTick + 30
  })
})

PlayerEvents.tick(event => {
  var p = event.player
  if (p.level.isClientSide() || p.tickCount % 10 != 0) return
  var data = p.persistentData
  var inside = (megaFlightUntil[String(p.uuid)] || 0) >= megaFlightTick
  var granted = data.getBoolean(MEGA_FLIGHT_GRANTED)
  if (p.isCreative() || p.isSpectator()) {
    if (granted) data.putBoolean(MEGA_FLIGHT_GRANTED, false)
    return
  }
  var abilities = p.abilities
  if (inside && !abilities.mayfly) {
    abilities.mayfly = true
    p.onUpdateAbilities()
    data.putBoolean(MEGA_FLIGHT_GRANTED, true)
    p.setStatusMessage(Text.aqua('Якір польоту: ви можете літати в цьому чанку'))
  } else if (!inside && granted) {
    data.putBoolean(MEGA_FLIGHT_GRANTED, false)
    if (abilities.mayfly) {
      var wasFlying = abilities.flying || !p.onGround()
      abilities.mayfly = false
      abilities.flying = false
      p.onUpdateAbilities()
      if (wasFlying) p.potionEffects.add('minecraft:slow_falling', 120, 0, false, true)
      p.setStatusMessage(Text.gold('Якір польоту позаду: політ вимкнено'))
    }
  }
})
