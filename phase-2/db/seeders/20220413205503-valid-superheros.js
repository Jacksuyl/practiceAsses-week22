'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here 
  {
    name: 'CAPTAIN MARVEL',
    alias: 'Carol Danvers',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1968
  },
  {
    name: 'BBBBB',
    alias: 'BBBBB',
    affiliation: 'Justice League',
    heightCm: 182,
    isMutant: false,
    race: 'god',
    universe: 'DC',
    releaseYear: 1941
  },
  {
    name: 'AAAA',
    alias: 'Bruce Wayne',
    affiliation: 'Justice League',
    heightCm: 188,
    isMutant: false,
    race: 'human',
    universe: 'DC',
    releaseYear: 1939
  },
  {
    name: 'IRON MAN',
    alias: 'Tony Stark',
    affiliation: 'Avengers',
    heightCm: 185,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1963
  },
  {
    name: 'THOR',
    alias: 'Thor Odinson',
    affiliation: 'Avengers',
    heightCm: 195,
    isMutant: false,
    race: 'god',
    universe: 'Marvel',
    releaseYear: 1962
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
