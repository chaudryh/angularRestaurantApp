const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const Kitchen = require('../models/Kitchen.js');
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
    Kitchen.find(function(err, kitchens){
        if (err) return next(err);
        res.json(kitchens);
    });
});

router.post('/', function(req, res, next){
    Kitchen.create(req.body, function(err, kitchen){
        if (err) return next(err);
        res.json(kitchen);
    });
});

 router.put('/:id', function(req, res, next){
     Kitchen.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, kitchen){
         if (err) return next(err);
         res.json(kitchen);
         });
 })

 router.delete('/:id', function(req, res, next){
     Kitchen.findByIdAndRemove(req.params.id, function(err, kitchen){
         if (err) return next(err);
         res.json(kitchen);
     });
 });

module.exports = router;

