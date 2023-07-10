const Sequelize = require('sequelize');

module.exports = {
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    urgency: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
};
