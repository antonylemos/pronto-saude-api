const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('HealSheet', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
