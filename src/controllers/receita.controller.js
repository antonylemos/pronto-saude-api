const { Receita } = require("../models/receita.model");

exports.findAll = async (req, res) => {
  try {
    const response = await Receita.findAll({});
    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving list.' });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Receita.findByPk(id);

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
    const response = await Receita.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Receita.update({ ...req.body}, { where: { id } });

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
    const response = await Receita.destroy({ where: { id}, truncate: false })

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
const { Receita } = require('../models/receita.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const receitaRepository = new ReceitaRepository();

router.get('/receitas', (req, res) => {
    try {
        // const receitas = Receita.find();
        // res.json(receitas);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/receitas:id', (req, res) => {
    try {
        // const receita = Receita.findById(req.params.id);
        // if (!receita) {
        //   return res.status(404).json({ error: 'Receita not found' });
        // }
        // res.json(receita);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/receitas', (req, res) => {
    try {
        // const { validade } = req.body;
        // const receita = new Receita({ validade });
        // const savedReceita = receita.save();
        // res.status(201).json(savedReceita);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/receitas', (req, res) => {
    try {
        const { validade } = req.body;
        // const updatedReceita = Receita.findByIdAndUpdate(
        //   req.params.id,
        //   { validade },
        //   { new: true }
        // );
        // if (!updatedReceita) {
        //   return res.status(404).json({ error: 'Receita not found' });
        // }
        // res.json(updatedReceita);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/receitas', (req, res) => {
    try {
        // const deletedReceita = Receita.findByIdAndDelete(req.params.id);
        // if (!deletedReceita) {
        //   return res.status(404).json({ error: 'Receita not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/