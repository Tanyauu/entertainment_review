const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model{}

Movie.init(
{
	id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_name:{
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
    modelName: 'movie',
  }
);

module.exports = Movie;