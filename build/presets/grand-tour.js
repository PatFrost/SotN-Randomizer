// This is a generated file. Do not edit it directly.
// Make your changes to presets/grand-tour.json then rebuild
// this file with `npm run build-presets -- grand-tour`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"grand-tour","name":"Grand Tour","description":"Soon to be discontinued after website rework. Base preset featuring 'tourist' relic extension.","author":"eldri7ch & Mottzilla","weight":0},"inherits":"casual","relicLocationsExtension":"tourist","colorrandoMode":true,"music":false,"complexityGoal":{"min":8,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]}})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
