const { DataTypes } = require('sequelize');
const Procedimento = require('./procedimento.model');
const Arquivo = require('./arquivo.model');

const Cirurgia = Procedimento.define(
    'Cirurgia',
    {
        classificacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        anestesia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_cirurgias',
    }
);

Cirurgia.belongsToMany(Arquivo, { through: 'CirurgiaArquivo' });

module.exports = Cirurgia;
