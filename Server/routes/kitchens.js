const express = require('express');
// const mongoose = require('mongoose');
const krouter = express.Router();
const bodyParser = require('body-parser');
const Kitchen = require('../models/Kitchen');
const cors = require('cors');

krouter.use(bodyParser.urlencoded({extend:true}));
krouter.use(bodyParser.json());

krouter.use(cors());
krouter.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

krouter.get('/', function(req, res, next){
    Kitchen.find(function(err, kitchens){
        if (err) return next(err);
        res.json(kitchens);
    });
});

krouter.post('/', function(req, res, next){
    Kitchen.create(req.body, function(err, kitchen){
        if (err) return next(err);
        res.json(kitchen);
    });
});

krouter.put('/:id', function(req, res, next){
     Kitchen.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, kitchen){
         if (err) return next(err);
         res.json(kitchen);
         });
 })

krouter.delete('/:id', function(req, res, next){
     Kitchen.findByIdAndRemove(req.params.id, function(err, kitchen){
         if (err) return next(err);
         res.json(kitchen);
     });
 });

module.exports = krouter;

