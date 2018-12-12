const express = require('express');
const urouter = express.Router();
const bodyParser = require('body-parser');

urouter.use(bodyParser.urlencoded({ extended : true}));
urouter.use(bodyParser.json());



router.post('/signup', function(req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({success: false, msg: 'Please pass username and password.'});
    } else {
      var newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  });
  
  router.post('/signin', function(req, res) {
    User.findOne({
      username: req.body.username
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
            PProfile.username = user.username;
            PPid = user._id;
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  });
  
  router.post('/update', function(req, res) {
    User.findByIdAndUpdate(PPid,
      {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      }, { new: true },
      function(err, user) {
      if (err) 
        res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
      else
        res.json({success: true});
    });
  });



module.exports = urouter;