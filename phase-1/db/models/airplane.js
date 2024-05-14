'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode:{
       type: DataTypes.STRING,
       allowNull: false,
       validate:{
        len:[2,2],
        isUppercase: true
       }
      },
    flightNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        len: [1,4],
        isNumeric:true
      }
    },
    inService: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    },
    maxNumPassengers: {
      allowNull:false,
      type: DataTypes.INTEGER,
      isNumeric:true,
      validate:
      {min: 2,
      max: 853}
    },
    currentNumPassengers: {
      type:DataTypes.INTEGER,
      allowNull:true,
      validate:{
        min: 0,
        max: 853,
        maxPassengers(value) {
          if (value > this.maxNumPassengers) {
            throw new Error();
          }
        },
        checkin(value){
          if (this.inService === false && value != null) {
            throw new console.error();
          }
        }
        
      }
    },
    firstFlightDate: {
      type: DataTypes.DATE,
      allowNull:true, 
      validate:{
        isAfter: '2019-12-31',
        isBefore: '2022-01-01'
      }
  }
  }, {
    sequelize,
    modelName: 'Airplane',
  });   
  return Airplane;
};