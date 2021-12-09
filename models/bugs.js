'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bugs.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    flickPrice: DataTypes.INTEGER,
    catchPhrase: DataTypes.STRING(1000),
    museumInfo: DataTypes.STRING(1000),
    image: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bugs',
  });
  return Bugs;
};