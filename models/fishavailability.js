'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fishavailability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fishavailability.init({
    name: DataTypes.STRING,
    isAllDay: DataTypes.BOOLEAN,
    isAllYear: DataTypes.BOOLEAN,
    northernMonths: DataTypes.STRING,
    southernMonths: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fishavailability',
  });
  return Fishavailability;
};