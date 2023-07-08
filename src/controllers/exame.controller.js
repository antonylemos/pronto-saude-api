const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const db = require('../models');

const Exame = db.exames;

const s3 = new aws.S3();

exports.findAll = async (req, res) => {
  try {
    const { type, category } = req.query;
    const where = {};

    if (type) {where.type = type;}
    if (category) {where.category = category;}

    const response = await Exame.findAll({
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

    const response = await Exame.findByPk(id);

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
    const response = await Exame.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Exame.update({ ...req.body}, { where: { id } });

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
    const response = await Exame.destroy({ where: { id}, truncate: false })

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
const { Exame } = require('../models/exame.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const exameRepository = new ExameRepository();

router.get('/exames', (req, res) => {
    try {
        // const exames = Exame.find();
        // res.json(exames);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/exames:id', (req, res) => {
    try {
        // const exame = Exame.findById(req.params.id);
        // if (!exame) {
        //   return res.status(404).json({ error: 'Exame not found' });
        // }
        // res.json(exame);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/exames', (req, res) => {
    try {
        const { formato, resultado } = req.body;
        // const exame = new Exame({ formato, resultado });
        // const savedExame = exame.save();
        // res.status(201).json(savedExame);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/exames', (req, res) => {
    try {
        const { formato, resultado } = req.body;
        // const updatedExame = Exame.findByIdAndUpdate(
        //   req.params.id,
        //   { formato, resultado },
        //   { new: true }
        // );
        // if (!updatedExame) {
        //   return res.status(404).json({ error: 'Exame not found' });
        // }
        // res.json(updatedExame);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/exames', (req, res) => {
    try {
        // const deletedExame = Exame.findByIdAndDelete(req.params.id);
        // if (!deletedExame) {
        //   return res.status(404).json({ error: 'Exame not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/