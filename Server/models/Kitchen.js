const mongoose = require('mongoose');

const kitchenSchema = new mongoose.Schema({
    provider: String,
    email: String,
    password: String,
    kitchenDays: String,
    starttime: String,
    endtime: String,
    image: String,
});

module.exports = mongoose.model('Kitchen', kitchenSchema);