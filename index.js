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


app.get("/", function(req, res){
  res.render("movies/index");
});




app.listen(3000);