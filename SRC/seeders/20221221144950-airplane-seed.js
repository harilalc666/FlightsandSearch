'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  //  await queryInterface.bulkInsert('airplanes',[
  //   {
  //     Model_number: "Boeing 777-200LR",
  //     capacity: 300,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     Model_number: "A320-214 CEO",
  //     capacity: 250,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     Model_number: "Airbus A321",
  //     capacity: 350,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     Model_number: "Boeing 747-400",
  //     capacity: 200,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     Model_number: "SpiceJet. VT-SYJ",
  //     capacity: 250,
  //     createdAt: new Date(),
  //     updatedAt: new Date()   
  //   }
  //  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
