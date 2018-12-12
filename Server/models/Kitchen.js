const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    question1: String,
    answer1: String,
    question2: String,
    answer2: String
});

module.exports = mongoose.model('Kitchen', userSchema);