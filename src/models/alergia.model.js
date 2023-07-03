const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alergia = sequelize.define(
    'Alergia',
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
        grau: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_alergias',
    }
);

module.exports = Alergia;
