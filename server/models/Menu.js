const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
    provider: String,
    item:  String,
    price: Number,
    veg: String

});


module.exports = mongoose.model('menu', menuSchema);