const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const Menu = require('../models/Menu.js');
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
    Menu.find(function(err, Menus){
        if (err) return next(err);
        res.json(Menus);
    });
});

//get one
router.get('/:name', function(req, res, next){
    let name = req.params.name;
    stuff = {"provider": name}
    //console.log(req.params.name)
    //console.log(name);
    Menu.find(stuff, function(err, menu){
        if (err) return next(err);
        res.json(menu);
    });
});

//post one
router.post('/post', function(req, res, next){
    Menu.create(req.body, function(err, Menu){
        if (err) return next(err);
        res.json(Menu);
    });
});

//update one
 router.put('update/:id', function(req, res, next){
    Menu.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, Menu){
        if (err) return next(err);
        res.json(Menu);
        });
 })
//delete one
 router.delete('/delete/:id', function(req, res, next){
     Menu.findByIdAndRemove(req.params.id, function(err, Menu){
         if (err) return next(err);
         res.json(Menu);
     });
 });

module.exports = router;

