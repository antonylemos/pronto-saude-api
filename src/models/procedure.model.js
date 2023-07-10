const Sequelize = require('sequelize');

module.exports = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    type: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    doctor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
};
