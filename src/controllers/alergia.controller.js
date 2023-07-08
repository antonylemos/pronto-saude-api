const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const db = require('../models');

const Alergia = db.procedimentos;

const s3 = new aws.S3();

exports.findAll = async (req, res) => {
  try {
    const response = await Alergia.findAll({});
    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving list.' });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Alergia.findByPk(id);

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
    const response = await Alergia.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Alergia.update({ ...req.body}, { where: { id } });

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
    const response = await Alergia.destroy({ where: { id}, truncate: false })

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
const { Alergia } = require('../models/alergia.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const alergiaRepository = new AlergiaRepository();

router.get('/alergias', (req, res) => {
    try {
        // const alergias = Alergia.find();
        // res.json(alergias);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/alergias:id', (req, res) => {
    try {
        // const alergia = Alergia.findById(req.params.id);
        // if (!alergia) {
        //   return res.status(404).json({ error: 'Alergia not found' });
        // }
        res.json(alergia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/alergias', (req, res) => {
    try {
        const { nome, grau } = req.body;
        // const alergia = new Alergia({ nome, grau });
        // const savedAlergia = alergia.save();
        // res.status(201).json(savedAlergia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/alergias', (req, res) => {
    try {
        const { nome, grau } = req.body;
        // const updatedAlergia = Alergia.findByIdAndUpdate(
        //   req.params.id,
        //   { nome, grau },
        //   { new: true }
        // );
        // if (!updatedAlergia) {
        //   return res.status(404).json({ error: 'Alergia not found' });
        // }
        // res.json(updatedAlergia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/alergias', (req, res) => {
    try {
        const deletedAlergia = Alergia.findByIdAndDelete(req.params.id);
        if (!deletedAlergia) {
          return res.status(404).json({ error: 'Alergia not found' });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/