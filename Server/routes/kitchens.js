const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const Kitchen = require('../models/Kitchen.js');
var jwt = require('jsonwebtoken');
const cors = require('cors');

router.use(bodyParser.urlencoded({extend:true}));
router.use(bodyParser.json());

router.use(cors());
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//get all
router.get('/', function(req, res, next){
    Kitchen.find(function(err, kitchens){
        if (err) return next(err);
        res.json(kitchens);
    });
});

//get one
router.get('/:id', function(req, res, next){
    let id = req.params.id;
    console.log(req.params.id)
    console.log(id);
    Kitchen.find(function(err, kitchen){
        if (err) return next(err);
        res.json(kitchen);
    });
});

//post one
router.post('/post', function(req, res, next){
    Kitchen.create(req.body, function(err, kitchen){
        if (err) return next(err);
        res.json(kitchen);
    });
});



//login method
router.post('/login', function(req, res) {
    Kitchen.findOne({
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
            var token = jwt.sign(user.toJSON(), 'hahatwz');
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  });



//update one
 router.put('/update/:id', function(req, res, next){
    Kitchen.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, kitchen){
        if (err) return next(err);
        res.json(kitchen);
        });
 })

 //delete one
 router.delete('/delete/:id', function(req, res, next){
     Kitchen.findByIdAndRemove(req.params.id, function(err, kitchen){
         if (err) return next(err);
         res.json(kitchen);
     });
 });

module.exports = router;

