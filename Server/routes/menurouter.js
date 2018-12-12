const express = require('express');
const mrouter = express.Router();
const bodyParser = require('body-parser');

mrouter.use(bodyParser.urlencoded({ extended : true}));
mrouter.use(bodyParser.json());

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




module.exports = mrouter;