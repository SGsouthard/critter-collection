'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileFun extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProfileFun.init({
    villager: DataTypes.TEXT,
    fruit: DataTypes.TEXT,
    npc: DataTypes.TEXT,
    catchphrase: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ProfileFun',
  });
  return ProfileFun;
};