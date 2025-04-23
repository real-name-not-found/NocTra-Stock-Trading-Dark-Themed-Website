const { model } = require('mongoose');

const { HoldingSchema } = require('../schemes/HoldingSCHEMA.JS');

const HoldingModel = new model("holding", HoldingSchema);

module.exports = { HoldingModel };
