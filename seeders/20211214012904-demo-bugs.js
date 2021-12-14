'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bugs', [
      {
        name: 'tiger-butterfly',
        price: 240,
        flickPrice: 360,
        catchPhrase: 'I caught a tiger butterfly! I've earned my stripes!',
        museumInfo: "Tiger butterflies are known for their majestic wings, which many consider quite beautiful. Truth be told, I find them monstrous! Those strange strip…"
        image: "https://acnhapi.com/v1/images/bugs/3",
        icon: "https://acnhapi.com/v1/icons/bugs/3",
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
