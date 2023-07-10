const Sequelize = require('sequelize');
const UserModel = require('./user.model');
const ProcedureModel = require('./procedure.model');
const TreatmentModel = require('./treatment.model');

const dialectOptions = process.env.APP_URL === 'localhost:8080' ? {} : {
  encrypt: true,
  ssl: {
    rejectUnauthorized: false
  }
};

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: dialectOptions,
});

const User = sequelize.define('user', UserModel);
const Procedure = sequelize.define('procedure', ProcedureModel);
const Treatment = sequelize.define('treatment', TreatmentModel)

User.hasMany(Procedure);
Procedure.belongsTo(User);
Procedure.hasOne(Treatment);
Treatment.belongsTo(Procedure)

const db = {};

db.sequelize = sequelize;

db.users = User;
db.procedures = Procedure;
db.treatment = Treatment;

module.exports = db;
