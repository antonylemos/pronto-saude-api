const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("healsheet", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
