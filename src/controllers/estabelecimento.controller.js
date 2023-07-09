const { Estabelecimento } = require("../models/estabelecimento.model");

exports.findAll = async (req, res) => {
  try {
    const response = await Estabelecimento.findAll({});
    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving list.' });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Estabelecimento.findByPk(id);

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
    const response = await Estabelecimento.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Estabelecimento.update({ ...req.body}, { where: { id } });

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
    const response = await Estabelecimento.destroy({ where: { id}, truncate: false })

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
const { Estabelecimento } = require('../models/estabelecimento.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const estabelecimentoRepository = new EstabelecimentoRepository();

router.get('/estabelecimentos', (req, res) => {
    try {
        // const estabelecimentos = Estabelecimento.find();
        // res.json(estabelecimentos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/estabelecimentos:id', (req, res) => {
    try {
        // const estabelecimento = Estabelecimento.findById(req.params.id);
        // if (!estabelecimento) {
        //   return res.status(404).json({ error: 'Estabelecimento not found' });
        // }
        // res.json(estabelecimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/estabelecimentos', (req, res) => {
    try {
        const { nome, endereco, planosSaude } = req.body;
        // const estabelecimento = new Estabelecimento({ nome, endereco, planosSaude });
        // const savedEstabelecimento = estabelecimento.save();
        // res.status(201).json(savedEstabelecimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/estabelecimentos', (req, res) => {
    try {
        const { nome, endereco, planosSaude } = req.body;
        // const updatedEstabelecimento = Estabelecimento.findByIdAndUpdate(
        //   req.params.id,
        //   { nome, endereco, planosSaude },
        //   { new: true }
        // );
        // if (!updatedEstabelecimento) {
        //   return res.status(404).json({ error: 'Estabelecimento not found' });
        // }
        // res.json(updatedEstabelecimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/estabelecimentos', (req, res) => {
    try {
        // const deletedEstabelecimento = Estabelecimento.findByIdAndDelete(req.params.id);
        // if (!deletedEstabelecimento) {
        //   return res.status(404).json({ error: 'Estabelecimento not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/