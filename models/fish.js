'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fish.init({
    name: DataTypes.STRING,
    shadowSize: DataTypes.STRING,
    price: DataTypes.INTEGER,
    cjPrice: DataTypes.INTEGER,
    catchPhrase: DataTypes.STRING(1000),
    museumInfo: DataTypes.STRING(1000),
    image: DataTypes.STRING,
    icon: DataTypes.STRING,
    capture: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Fish',
  });
  return Fish;
};