const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model{}

Game.init(
{
	id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_name:{
    	type:DataTypes.STRING,
    	allowNull:false,
    },
    info:{
    	type:DataTypes.STRING,
    	allowNull:false,
    	length:500,
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;