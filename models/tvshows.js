const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class TV extends Model{}

TV.init(
{
	id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tv_name:{
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
    modelName: 'tv',
  }
);

module.exports = TV;