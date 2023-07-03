const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Receita = require('./receita.model');

const Tratamento = sequelize.define(
    'Tratamento',
    {
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        urgencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tempo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_tratamentos',
    }
);

Tratamento.hasOne(Receita);

module.exports = Tratamento;
