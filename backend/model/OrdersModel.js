const { model } = require('mongoose');

const { OrdersSchema } = require('../schemes/OrdersSchema');

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };
