const { Model, DataTypes } = require('sequelize');

class Category extends Model {}

const sequelize = require('../config/connection.js');

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define columns
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
