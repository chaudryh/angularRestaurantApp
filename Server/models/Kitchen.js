const mongoose = require('mongoose');

const kitchenSchema = new mongoose.Schema({
    provider: String,
    kitchenDays: String,
    time: String,
    image: String,
});

module.exports = mongoose.model('Kitchen', kitchenSchema);