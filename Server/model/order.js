var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var orderSchema = new Schema({
    orderid: {
        type: Number,
        unique: true,
        required: true
        },
    password: {
        type: String,
        required: true
        },
    email:{
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
        },
    lastname: {
        type: String,
        required: true
        },
    question: {
        type: String,
        required: true
        },
    answer:{
        type: String,
        required: true
        }
});


module.exports = mongoose.model('order', orderSchema);
