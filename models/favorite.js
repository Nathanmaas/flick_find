'use strict';
module.exports = function(sequelize, DataTypes) {
  var favorite = sequelize.define('favorite', {
    imdbID: DataTypes.STRING,
    Title: DataTypes.STRING,
    Year: DataTypes.STRING,
    Poster: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // models.favorite.hasMany(models.comment);

      }
    }
  });
  return favorite;
};