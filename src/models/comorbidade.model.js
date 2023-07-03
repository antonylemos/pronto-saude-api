const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comorbidade = sequelize.define(
    'Arquivo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gravidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_comorbidades',
    }
);

module.exports = Comorbidade;
