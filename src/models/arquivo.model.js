const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Arquivo = sequelize.define(
    'Arquivo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_arquivos',
    }
);

module.exports = Arquivo;
