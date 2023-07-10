const db = require('../models');

const Procedure = db.procedures;
const User = db.users;
const Treatment = db.treatment;

exports.findAll = async (req, res) => {
  try {
    const { type, category } = req.query;
    const { userId } = req.user;

    const where = {};

    if (userId) {
      where.userId = userId;
    }

    if (type) {
      where.type = type;
    }

    if (category) {
      where.category = category;
    }

    const response = await Procedure.findAll({
      where,
      include: [{ model: User, as: 'user' }],
    });

    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving list.' });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Procedimento.findByPk(id);

    if (!response) {
      return res.status(404).send({ message: 'Object not found.' });
    }

    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || `Error retrieving object with id=${id}` });
  }
};

exports.create = async (req, res) => {
  try {
    const { userId } = req.user;
    if (!req.body.userId && !userId) {
      return res.status(400).send({ message: 'User id is required' });
    }

    const procedure = await Procedure.create({ ...req.body.procedure, userId: req.body.userId || userId });

    const treatment = await Treatment.create({ ...req.body.treatment, procedureId: procedure.id });

    const procedureDetails = { procedure, treatment };

    res.send(procedureDetails);
  } catch (err) {
    let errorMessage = err.message || 'Error creating procedure'

    if (err.original?.constraint === 'procedures_userId_fkey') {
      errorMessage = 'User does not exist.'
    }

    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Procedimento.update({ ...req.body}, { where: { id } });

    if (response == 1) {
      res.send({ message: 'Object was updated successfully.' });
    } else {
      res.send({ message: `Cannot update object with id=${id}` });
    }
  } catch (err) {
    let errorMessage = err.message || `Error updating object with id=${id}`
    res.status(500).send({ message: errorMessage });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Procedimento.destroy({ where: { id}, truncate: false })

    if (response == 1) {
      res.send({ message: 'Object was deleted successfully.' });
    } else {
      res.send({ message: `Cannot delete object with id=${id}` });
    }
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while removing this object.' });
  }
};
