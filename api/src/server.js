import express from "express";
import middleWares from "./middlewares";
import routes from "./routes";
const { Client, Pool } = require("pg");
const { Sequelize } = require('sequelize');
const server = express();

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/bank') // Example for postgres

server.use(middleWares);

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'bank',
//   password: 'admin',
//   port: 5432,
// });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

server.use("/api/", routes);

module.exports = server;
