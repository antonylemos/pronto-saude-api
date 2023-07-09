const { Procedimento } = require("../models/procedimento.model");

exports.findAll = async (req, res) => {
  try {
    const response = await Procedimento.findAll({});
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
    const response = await Procedimento.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
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

// CONTROLLER ANTIGO
/*
const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Procedimento } = require('../models/procedimento.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const procedimentoRepository = new ProcedimentoRepository();

router.get('/procedimentos', (req, res) => {
    try {
        // const procedimentos = Procedimento.find();
        // res.json(procedimentos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/procedimentos:id', (req, res) => {
    try {
        // const procedimento = Procedimento.findById(req.params.id);
        // if (!procedimento) {
        //   return res.status(404).json({ error: 'Procedimento not found' });
        // }
        // res.json(procedimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/procedimentos', (req, res) => {
    try {
        const { categoria, descricao, medico, data, paciente, estabelecimento } = req.body;
        // const procedimento = new Procedimento({ categoria, descricao, medico, data, paciente, estabelecimento });
        // const savedProcedimento = procedimento.save();
        // res.status(201).json(savedProcedimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/procedimentos', (req, res) => {
    try {
        const { categoria, descricao, medico, data, paciente, estabelecimento } = req.body;
        // const updatedProcedimento = Procedimento.findByIdAndUpdate(
        //   req.params.id,
        //   { categoria, descricao, medico, data, paciente, estabelecimento },
        //   { new: true }
        // );
        // if (!updatedProcedimento) {
        //   return res.status(404).json({ error: 'Procedimento not found' });
        // }
        // res.json(updatedProcedimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/procedimentos', (req, res) => {
    try {
        // const deletedProcedimento = Procedimento.findByIdAndDelete(req.params.id);
        // if (!deletedProcedimento) {
        //   return res.status(404).json({ error: 'Procedimento not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/