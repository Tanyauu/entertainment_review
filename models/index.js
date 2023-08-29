const Game = require('./games');
const Movie = require('./movies');
const TV = require('./tvshows');
const Review = require('./review');

//movie has many reviews
Movie.hasMany(Review, {
<<<<<<< HEAD
	foreignKey: "movie_id"

});

Game.hasMany(Review, {
	foreignKey: "game_id"

});
TV.hasMany(Review, {
	foreignKey: "tv_id"
=======
  foreignKey: 'movie_id',
});

Game.hasMany(Review, {
  foreignKey: 'game_id',
});
>>>>>>> 5b6194be0859045c5a6b23e7a83279173959f67a

TV.hasMany(Review, {
  foreignKey: 'tv_id',
});

Review.belongsTo(Movie, {
  foreignKey: 'movie_id',
});

Review.belongsTo(Game, {
  foreignKey: 'game_id',
});

Review.belongsTo(TV, {
  foreignKey: 'tv_id',
});

module.exports = {
  Game,
  Movie,
  TV,
  Review,
};
