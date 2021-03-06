'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seacreatures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Seacreatures.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    catchPhrase: DataTypes.TEXT,
    museumInfo: DataTypes.TEXT,
    image: DataTypes.STRING,
    icon: DataTypes.STRING,
    capture: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seacreatures',
  });
  return Seacreatures;
};