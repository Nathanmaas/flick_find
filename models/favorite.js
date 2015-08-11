'use strict';
module.exports = function(sequelize, DataTypes) {
  var favorites = sequelize.define('favorites', {
    imdbID: DataTypes.STRING,
    Title: DataTypes.STRING,
    Year: DataTypes.STRING,
    Poster: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return favorites;
};