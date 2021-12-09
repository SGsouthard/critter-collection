'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seacreatureavailabilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      isAllDay: {
        type: Sequelize.BOOLEAN
      },
      isAllYear: {
        type: Sequelize.BOOLEAN
      },
      northernMonths: {
        type: Sequelize.STRING
      },
      southernMonths: {
        type: Sequelize.STRING
      },
      time: {
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
    await queryInterface.dropTable('Seacreatureavailabilities');
  }
};