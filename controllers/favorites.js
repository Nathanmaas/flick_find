var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');


router.get('/', function(req, res) {
    db.favorite.findAll().then(function(favorites){
      res.render('favorites/index',{favorites: favorites});
    });
  });

router.post('/', function(req, res) {
  // res.render(req.body);
  db.favorite.create({
    imdbID:req.body.imdbID,
    Year:req.body.Year,
    Title:req.body.Title,
    Poster:req.body.Poster
  })
  .then(function(favorite){
    res.redirect('/favorites');
  });
});

router.post('/:id',function(req, res){
  db.favorite.destroy({where:{id:req.params.id}}).then(function(){
    res.redirect('/favorites');
  });
});

router.get("/:id/tags", function(req, res){
  res.render("favorites/newtag.ejs", {id:req.params.id});
});

router.post("/:id/tags", function(req, res){
  res.render(req.body);

})





module.exports = router;