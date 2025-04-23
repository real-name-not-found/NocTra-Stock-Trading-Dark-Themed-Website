const { model } = require('mongoose');

const { PositionsSchema } = require('../schemes/PositionsSchema');

const PositionModel = new model("position", PositionsSchema);

module.exports = { PositionModel };
