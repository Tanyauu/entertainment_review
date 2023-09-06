const Review = require('./review');
const Item = require('./item');
const User = require('./newuser');

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

  Review,
  Item,
  User,
};
