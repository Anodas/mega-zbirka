// The Ring of Redemption is handed out on first join, the same way Enigmatic Legacy gives the Ring of Seven Curses.
PlayerEvents.loggedIn(event => {
  const player = event.player
  if (player.persistentData.getBoolean('megaRedemptionRingGift')) return
  player.give('enigmaticlegacyplus:redemption_ring')
  player.persistentData.putBoolean('megaRedemptionRingGift', true)
})
