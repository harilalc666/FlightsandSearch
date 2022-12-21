'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TotalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      BoardingGate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      DepartureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ArrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      DepartureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ArrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      AirplanId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      FlightNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};