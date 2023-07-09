const { Tratamento } = require("../models/tratamento.model");

exports.findAll = async (req, res) => {
  try {
    const response = await Tratamento.findAll({});
    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving list.' });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Tratamento.findByPk(id);

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
    const response = await Tratamento.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Tratamento.update({ ...req.body}, { where: { id } });

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
    const response = await Tratamento.destroy({ where: { id}, truncate: false })

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
const { Tratamento } = require('../models/tratamento.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const tratamentoRepository = new TratamentoRepository();

router.get('/tratamentos', (req, res) => {
    try {
        // const tratamentos = Tratamento.find();
        // res.json(tratamentos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/tratamentos:id', (req, res) => {
    try {
        // const tratamento = Tratamento.findById(req.params.id);
        // if (!tratamento) {
        //   return res.status(404).json({ error: 'Tratamento not found' });
        // }
        // res.json(tratamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/tratamentos', (req, res) => {
    try {
        const { tipo, urgencia, tempo, status, receita } = req.body;
        // const tratamento = new Tratamento({ tipo, urgencia, tempo, status, receita });
        // const savedTratamento = tratamento.save();
        // res.status(201).json(savedTratamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/tratamentos', (req, res) => {
    try {
        const { tipo, urgencia, tempo, status, receita } = req.body;
        // const updatedTratamento = Tratamento.findByIdAndUpdate(
        //   req.params.id,
        //   { tipo, urgencia, tempo, status, receita },
        //   { new: true }
        // );
        // if (!updatedTratamento) {
        //   return res.status(404).json({ error: 'Tratamento not found' });
        // }
        // res.json(updatedTratamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/tratamentos', (req, res) => {
    try {
        // const deletedTratamento = Tratamento.findByIdAndDelete(req.params.id);
        // if (!deletedTratamento) {
        //   return res.status(404).json({ error: 'Tratamento not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/