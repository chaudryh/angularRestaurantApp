const express = require('express');
// const mongoose = require('mongoose');
const urouter = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/User');
const cors = require('cors');
var jwt = require('jsonwebtoken');

urouter.use(bodyParser.urlencoded({extend:true}));
urouter.use(bodyParser.json());

urouter.use(cors());
urouter.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


  
urouter.post('/signin', function(req, res) {
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), config.secret);
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  });




urouter.get('/', function(req, res, next){
    User.find(function(err, Users){
        if (err) return next(err);
        res.json(Users);
    });
});

urouter.post('/', function(req, res, next){
    User.create(req.body, function(err, User){
        if (err) return next(err);
        res.json(User);
    });
});

urouter.put('/:id', function(req, res, next){
     User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, User){
         if (err) return next(err);
         res.json(User);
         });
 })

urouter.delete('/:id', function(req, res, next){
     User.findByIdAndRemove(req.params.id, function(err, User){
         if (err) return next(err);
         res.json(User);
     });
 });

module.exports = urouter;

