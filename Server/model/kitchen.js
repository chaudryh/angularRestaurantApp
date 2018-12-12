var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var kitchenSchema = new Schema({
    itemname: {
        type: String,
        unique: true,
        required: true
        },
    startdate: {
        type: Date,
        required: true
        },
    enddate:{
        type: Date,
        required: true
        }

});


module.exports = mongoose.model('kitchen', kitchenSchema);
