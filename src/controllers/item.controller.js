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