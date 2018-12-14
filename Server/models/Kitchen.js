const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const kitchenSchema = new mongoose.Schema({
    provider: String,
    email: String,
    password: String,
    kitchenDays: String,
    starttime: String,
    endtime: String,
    image: String,
});


kitchenSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

kitchenSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


module.exports = mongoose.model('Kitchen', kitchenSchema);