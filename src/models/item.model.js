const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define(
    'Item',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_itens',
    }
);

module.exports = Item;
