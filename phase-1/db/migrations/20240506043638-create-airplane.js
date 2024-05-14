'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airlineCode: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      flightNumber: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      inService: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER,
        
        allowNull:false
      },
      currentNumPassengers: {
        allowNull:true,
        type: Sequelize.INTEGER
      },
      firstFlightDate: {
        type: Sequelize.DATE,
        allowNull:true 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });

    await queryInterface.addIndex(
      "Airplanes",
      ["airlineCode","flightNumber"],
      {
        unique:true
      }
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};