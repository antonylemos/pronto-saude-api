const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Item = require('./item.model');
const Arquivo = require('./arquivo.model');

const Receita = sequelize.define(
    'Receita',
    {
        validade: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_receitas',
    }
);

Receita.hasMany(Item);
Receita.belongsTo(Arquivo);

module.exports = Receita;
