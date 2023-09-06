const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category:
    {
      type: DataTypes.STRING,
      allowNull: false,

    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT('long'),
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
  }
);

module.exports = Item;