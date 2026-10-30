// Fill only empty basic combat slots on the first login after this migration.
PlayerEvents.loggedIn(event=>event.server.scheduleInTicks(40,()=>global.megaNightfallStarter(event.player)))
