const Game = require('./games');
const Movie = require('./movies');
const TV = require('./tvshows');
const Review = require('./review');


//movie has many reviews
Movie.hasMany(Review, {
	foreignKey: "movie_id"

});

Game.hasMany(Review, {
	foreignKey: "game_id"

});
TV.hasMany(Review, {
	foreignKey: "tv_id"

});