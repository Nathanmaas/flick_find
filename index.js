var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var moviesController = require("./controllers/movies");

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use("/movies", moviesController);


app.get('/', function(req, res){
  res.render("index");
});

app.get('/search', function(req, res){
  res.render('movies/index.ejs');
});

app.get('/favorites', function(req, res){
  res.render('favorites/index.ejs');
});




app.listen(3000);