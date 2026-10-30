// Builder's blueprint: right click opens the BuildPrint menu (buildprint:menu, the same as the B key).
ItemEvents.rightClicked('kubejs:builder_blueprint', event => {
  if (!Platform.isLoaded('buildprint')) return
  var Actions = Java.loadClass('com.buildprint.api.BuildprintActions')
  if (Actions.run('buildprint:menu')) event.cancel()
})
