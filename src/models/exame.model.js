const { DataTypes } = require('sequelize');
const Arquivo = require('./arquivo.model');
const Procedimento = require('./procedimento.model');
const sequelize = require('../config/database');

const Exame = sequelize.define(
    'Exame',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        formato: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_exames',
    }
);

Exame.belongsTo(Arquivo, { foreignKey: 'arquivoId' });

module.exports = Exame;
