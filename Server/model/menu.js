var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var menuSchema = new Schema({
    menuid: {
        type: String,
        unique: true,
        required: true
        },
    name: {
        type: String,
        required: true
        },
    ingredients:{
        type: [kitchenschema],
        required: true
    }
});


module.exports = mongoose.model('menu', menuSchema);
