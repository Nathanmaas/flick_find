var express = require('express');
var router = express.Router();
var request = require('request');


function Movie(title, year, id){
  this.title = title;
  this.year = year;
  this.id = id;

}

var movies = [];


router.get("/", function(req, res){
  res.render('movies/index.ejs');
})


router.get("/results", function(req, res){
  //res.render("results")
  var title = req.query.t
  var url = "http://www.omdbapi.com/?s=" + title


  request(url, function(error, response, data){
    var movieData = JSON.parse(data)
    var results = movieData.Search

    if(results){
      res.render('movies/results', {
        myMovies: results
      });
    }

  })
})

router.get("/show/:id", function(req, res){
  var id = req.params.id
  var url = "http://www.omdbapi.com/?i=" + id + "&tomatoes=true"

  request(url, function(error, response, data){
    var movieData = JSON.parse(data)
    var result = movieData.Plot
    var rating = parseInt(movieData.imdbRating)

    if(result){
      res.render('movies/show', {
        description: movieData,
        rating: rating
      });
    }
  })
})

module.exports = router;
