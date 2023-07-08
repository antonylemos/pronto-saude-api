const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const db = require('../models');

const Cirurgia = db.cirurgias;

const s3 = new aws.S3();

exports.findAll = async (req, res) => {
  try {
    const { type, category } = req.query;
    const where = {};

    if (type) {where.type = type;}
    if (category) {where.category = category;}

    const response = await Cirurgia.findAll({
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

    const response = await Cirurgia.findByPk(id);

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
    const response = await Cirurgia.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Cirurgia.update({ ...req.body}, { where: { id } });

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
    const response = await Cirurgia.destroy({ where: { id}, truncate: false })

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
const { Cirurgia } = require('../models/cirurgia.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const cirurgiaRepository = new CirurgiaRepository();

router.get('/cirurgias', (req, res) => {
    try {
        // const cirurgias = Cirurgia.find();
        // res.json(cirurgias);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/cirurgias:id', (req, res) => {
    try {
        // const cirurgia = Cirurgia.findById(req.params.id);
        // if (!cirurgia) {
        //   return res.status(404).json({ error: 'Cirurgia not found' });
        // }
        // res.json(cirurgia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/cirurgias', (req, res) => {
    try {
        const { classificacao, resultado, anestesia } = req.body;
        // const cirurgia = new Cirurgia({ classificacao, resultado, anestesia });
        // const savedCirurgia = cirurgia.save();
        // res.status(201).json(savedCirurgia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/cirurgias', (req, res) => {
    try {
        const { classificacao, resultado, anestesia } = req.body;
        // const updatedCirurgia = Cirurgia.findByIdAndUpdate(
        //   req.params.id,
        //   { classificacao, resultado, anestesia },
        //   { new: true }
        // );
        // if (!updatedCirurgia) {
        //   return res.status(404).json({ error: 'Cirurgia not found' });
        // }
        // res.json(updatedCirurgia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/cirurgias', (req, res) => {
    try {
        // const deletedCirurgia = Cirurgia.findByIdAndDelete(req.params.id);
        // if (!deletedCirurgia) {
        //   return res.status(404).json({ error: 'Cirurgia not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/