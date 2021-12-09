'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      shadowSize: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      cjPrice: {
        type: Sequelize.INTEGER
      },
      catchPhrase: {
        type: Sequelize.STRING
      },
      museumInfo: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Fishes');
  }
};