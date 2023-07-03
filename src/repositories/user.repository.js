const User = require('../models/user.model');
const { Op } = require('sequelize');

class UserRepository {
    async findByEmail(email) {
        return await User.findOne({
            where: {
                email: {
                    [Op.eq]: email
                }
            }
        });
    }

    async findByResetToken(resetToken) {
        return await User.findOne({
            where: {
                resetToken: {
                    [Op.eq]: resetToken
                }
            }
        });
    }

    async create(user) {
        return await User.create(user);
    }

}

module.exports = UserRepository;
