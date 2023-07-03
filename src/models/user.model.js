const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Procedimento = require('./procedimento.model');
const Alergia = require('./alergia.model');
const Comorbidade = require('./comorbidade.model');

const User = sequelize.define(
    'User',
    {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dataNascimento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        tipoSanguineo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resetToken: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'tb_usuarios',
    }
);

User.hasMany(Procedimento, { foreignKey: 'userId' });
Procedimento.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Alergia, { foreignKey: 'userId' });
User.hasMany(Comorbidade, { foreignKey: 'userId' });


User.prototype.inserirExame = function (nomeExame, dataRealizacao) {
    return Procedimento.create({
        nomeExame,
        dataRealizacao,
        userId: this.id,
    });
};

User.prototype.consultarHistorico = function () {
    return Procedimento.findAll({ where: { userId: this.id } });
};

User.prototype.gerarRelatorio = function () {
    // Lógica para gerar o relatório
};

module.exports = User;
