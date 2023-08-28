const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Review extends Model {}

Review.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Review: {
      type: DataTypes.STRING
    },
    movie_id:{
        type:DataTypes.INTEGER,
        references: {
        model: 'movie',
        key: 'id',
      },
      game_id:{
        type:DataTypes.INTEGER,
        references: {
        model: 'game',
        key: 'id',
      },
      tv_id:{
        type:DataTypes.INTEGER,
        references: {
        model: 'tv',
        key: 'id',
      }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;