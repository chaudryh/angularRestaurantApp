const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/User.js');
const cors = require('cors');

router.use(bodyParser.urlencoded({extend:true}));
router.use(bodyParser.json());

router.use(cors());
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function(req, res, next){
    User.find(function(err, Users){
        if (err) return next(err);
        res.json(Users);
    });
});

router.post('/', function(req, res, next){
    User.create(req.body, function(err, User){
        if (err) return next(err);
        res.json(User);
    });
});

 router.put('/:id', function(req, res, next){
     User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, User){
         if (err) return next(err);
         res.json(User);
         });
 })

 router.delete('/:id', function(req, res, next){
     User.findByIdAndRemove(req.params.id, function(err, User){
         if (err) return next(err);
         res.json(User);
     });
 });

module.exports = router;

