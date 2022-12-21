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
    await queryInterface.bulkInsert('Airports', [{
      name: 'Chhatrapati Shivaji International Airport (BOM)',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Shri Guru Gobind Singh Ji Airport (NDC)',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Dr Babasaheb Ambedkar International Airport (NAG)',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name : 'Pune International Airport (PNQ)',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
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
