const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const db = require('../models');

const Item = db.itens;

const s3 = new aws.S3();

exports.findAll = async (req, res) => {
  try {
    const { type, category } = req.query;
    const where = {};

    if (type) {where.type = type;}
    if (category) {where.category = category;}

    const response = await Item.findAll({
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

    const response = await Item.findByPk(id);

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
    const response = await Item.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Item.update({ ...req.body}, { where: { id } });

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
    const response = await Item.destroy({ where: { id}, truncate: false })

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
const { Item } = require('../models/item.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const itemRepository = new ItemRepository();

router.get('/itens', (req, res) => {
    try {
        // const itens = Item.find();
        // res.json(itens);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/itens:id', (req, res) => {
    try {
        // const item = Item.findById(req.params.id);
        // if (!item) {
        //   return res.status(404).json({ error: 'Item not found' });
        // }
        // res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/itens', (req, res) => {
    try {
        // const { nome, descricao } = req.body;
        // const item = new Item({ nome, descricao });
        // const savedItem = item.save();
        // res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/itens', (req, res) => {
    try {
        const { nome, descricao } = req.body;
        // const updatedItem = Item.findByIdAndUpdate(
        //   req.params.id,
        //   { nome, descricao },
        //   { new: true }
        // );
        // if (!updatedItem) {
        //   return res.status(404).json({ error: 'Item not found' });
        // }
        // res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/itens', (req, res) => {
    try {
        // const deletedItem = Item.findByIdAndDelete(req.params.id);
        // if (!deletedItem) {
        //   return res.status(404).json({ error: 'Item not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/