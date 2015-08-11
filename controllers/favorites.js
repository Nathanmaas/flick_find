var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');



router.get('/favorites', function(req, res) {
    db.favorite.findAll().then(function(favs){
      res.render('favorites/index',{favs: favs});
    })
  })

router.post('/favorites', function(req, res) {
  db.favorite.findOrCreate({where:
                            {imdbID:req.body.imdbID,
                            Year:req.body.Year,
                            Title:req.body.Title,
                            Poster:req.body.Poster
                            }}).then(function(favorite){
                              res.redirect('/movies/show/?q=' +imdbId);
                            });
    });

