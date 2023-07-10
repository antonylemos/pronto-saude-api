const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./user.model');
const Estabelecimento = require('./estabelecimento.model');
const Exame = require('./exame.model');

const Procedimento = sequelize.define(
    'Procedimento',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_procedimentos',
    }
);

// Estabelecimento.hasOne(Procedimento, { foreignKey: 'procedimentoId' })
// Procedimento.belongsTo(Estabelecimento, { foreignKey: 'estabelecimentoId' });
Procedimento.belongsTo(Exame, { foreignKey: 'exameId' });

Procedimento.prototype.baixar = function () {
    // Lógica para baixar o procedimento
};

Procedimento.prototype.editar = function (categoria, descricao, medico, data) {
    this.categoria = categoria;
    this.descricao = descricao;
    this.medico = medico;
    this.data = data;
    return this.save();
};

module.exports = Procedimento;
