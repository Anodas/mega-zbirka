// Nightfall-style basic combat, Epic Fight 21.17.3.1 / NeoForge 1.21.1.
// Only fill empty starter slots once. Never replace a player's chosen skills.
global.megaNightfallStarter = player => Java.loadClass('mega.nightfall.MegaNightfallCompat').grantStarter(player)
