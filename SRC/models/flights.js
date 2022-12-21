'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init({
    TotalSeats: {
    type:DataTypes.INTEGER,
    allowNull: false
    },
    BoardingGate: {
      type:DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    DepartureTime: {
      type:DataTypes.DATE,
      allowNull: false
    },
    ArrivalTime: {
      type:DataTypes.DATE,
      allowNull: false
    },
    DepartureAirportId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    ArrivalAirportId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    AirplanId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    FlightNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};