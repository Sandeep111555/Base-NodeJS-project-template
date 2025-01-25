'use strict';

/** @type {import('sequelize-cli').Migration} */
const {op} = require('sequelize');
const { or } = require('sequelize');
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
    await queryInterface.bulkInsert('Airplanes', [{
       modelNumber: 'Airbus a418',
       capacity: 90,
       createdAt:new Date(),
       updatedAt:new Date()
     }],
     [{
      modelNumber: 'Boeing 100',
      capacity: 100,
      createdAt:new Date(),
      updatedAt:new Date()
    }],
    [{
      modelNumber: 'StarLinkAir 200',
      capacity: 200,
      createdAt:new Date(),
      updatedAt:new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {
      [Op.or]:[
        {modelNumber: 'Airbus a418'},
        {modelNumber: 'Boeing 100'},
        {modelNumber: 'StarLinkAir 200'},
      ]
    });
  }
};
