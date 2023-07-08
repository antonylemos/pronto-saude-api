const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const db = require('../models');

const Arquivo = db.arquivos;

const s3 = new aws.S3();

exports.findAll = async (req, res) => {
  try {
    const { type, category } = req.query;
    const where = {};

    if (type) {where.type = type;}
    if (category) {where.category = category;}

    const response = await Arquivo.findAll({
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

    const response = await Arquivo.findByPk(id);

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
    const response = await Arquivo.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Arquivo.update({ ...req.body}, { where: { id } });

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
    const response = await Arquivo.destroy({ where: { id}, truncate: false })

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
const { Arquivo } = require('../models/arquivo.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const arquivoRepository = new ArquivoRepository();

router.get('/arquivos', (req, res) => {
    try {
        // const arquivos = Arquivo.find();
        res.json(arquivos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/arquivos:id', (req, res) => {
    try {
        // const arquivo = Arquivo.findById(req.params.id);
        // if (!arquivo) {
        //   return res.status(404).json({ error: 'Arquivo not found' });
        // }
        // res.json(arquivo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/arquivos', (req, res) => {
    try {
        const { titulo, imagem, data } = req.body;
        // const arquivo = new Arquivo({ titulo, imagem, data });
        // const savedArquivo = arquivo.save();
        // res.status(201).json(savedArquivo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/arquivos', (req, res) => {
    try {
        const { titulo, imagem, data } = req.body;
        // const updatedArquivo = Arquivo.findByIdAndUpdate(
        //   req.params.id,
        //   { titulo, imagem, data },
        //   { new: true }
        // );
        // if (!updatedArquivo) {
        //   return res.status(404).json({ error: 'Arquivo not found' });
        // }
        // res.json(updatedArquivo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/arquivos', (req, res) => {
    try {
        // const deletedArquivo = Arquivo.findByIdAndDelete(req.params.id);
        // if (!deletedArquivo) {
        //   return res.status(404).json({ error: 'Arquivo not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/