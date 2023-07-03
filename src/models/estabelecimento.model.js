const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estabelecimento = sequelize.define(
    'Estabelecimento',
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
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        planosSaude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_estabelecimentos',
    }
);

module.exports = Estabelecimento;
