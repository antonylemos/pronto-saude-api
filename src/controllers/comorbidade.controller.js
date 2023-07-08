const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const db = require('../models');

const Comorbidade = db.comorbidades;

const s3 = new aws.S3();

exports.findAll = async (req, res) => {
  try {
    const { type, category } = req.query;
    const where = {};

    if (type) {where.type = type;}
    if (category) {where.category = category;}

    const response = await Comorbidade.findAll({
      where
    });

    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving list.' });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Comorbidade.findByPk(id);

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
    const response = await Comorbidade.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Comorbidade.update({ ...req.body}, { where: { id } });

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
    const response = await Comorbidade.destroy({ where: { id}, truncate: false })

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
const { Comorbidade } = require('../models/comorbidade.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const comorbidadeRepository = new ComorbidadeRepository();

router.get('/comorbidades', (req, res) => {
    try {
        // const comorbidades = Comorbidade.find();
        // res.json(comorbidades);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/comorbidades:id', (req, res) => {
    try {
        // const comorbidade = Comorbidade.findById(req.params.id);
        // if (!comorbidade) {
        //   return res.status(404).json({ error: 'Comorbidade not found' });
        // }
        // res.json(comorbidade);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/comorbidades', (req, res) => {
    try {
        const { nome, gravidade } = req.body;
        // const comorbidade = new Comorbidade({ nome, gravidade });
        // const savedComorbidade = comorbidade.save();
        // res.status(201).json(savedComorbidade);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/comorbidades', (req, res) => {
    try {
        const { nome, gravidade } = req.body;
        // const updatedComorbidade = Comorbidade.findByIdAndUpdate(
        //   req.params.id,
        //   { nome, gravidade },
        //   { new: true }
        // );
        // if (!updatedComorbidade) {
        //   return res.status(404).json({ error: 'Comorbidade not found' });
        // }
        // res.json(updatedComorbidade);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/comorbidades', (req, res) => {
    try {
        // const deletedComorbidade = Comorbidade.findByIdAndDelete(req.params.id);
        // if (!deletedComorbidade) {
        //   return res.status(404).json({ error: 'Comorbidade not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/