// const Game = require('./games');
// const Movie = require('./movies');
// const TV = require('./tvshows');
const Review = require('./review');
const Item = require('./item');
const User = require('./user');

//movie has many reviews
// Movie.hasMany(Review, {
//   foreignKey: 'movie_id',
// });

// Game.hasMany(Review, {
//   foreignKey: 'game_id',
// });

// TV.hasMany(Review, {
//   foreignKey: 'tv_id',
// });

// Review.belongsTo(Movie, {
//   foreignKey: 'movie_id',
// });

// Review.belongsTo(Game, {
//   foreignKey: 'game_id',
// });

// Review.belongsTo(TV, {
//   foreignKey: 'tv_id',
// });
Item.hasMany(Review, {
  foreignKey: 'item_id',
});
User.hasMany(Review, {
  foreignKey: 'user_id',
});
Review.belongsTo(Item, {
  foreignKey: 'item_id',
});
Review.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  // Game,
  // Movie,
  // TV,
  Review,
  Item,
  User,
};
