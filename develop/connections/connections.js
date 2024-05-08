// Imports the Sequelize library
const Sequelize = require('sequelize');
// 'dotenv' package in order to load the .env file
require('dotenv').config();

let sequelize;
// Checks to see if the application is deployed.
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3301
      }
    );
  }
  
  module.exports = sequelize;
  