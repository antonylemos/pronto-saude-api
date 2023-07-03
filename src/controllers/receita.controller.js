const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Receita } = require('../models/receita.model');
const TokenUtils = require('../utils/Token.utils');

const router = express.Router();
const receitaRepository = new ReceitaRepository();

router.get('/receitas', (req, res) => {
    try {
        const receitas = Receita.find();
        res.json(receitas);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/receitas:id', (req, res) => {
    try {
        const receita = Receita.findById(req.params.id);
        if (!receita) {
          return res.status(404).json({ error: 'Receita not found' });
        }
        res.json(receita);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/receitas', (req, res) => {
    try {
        const { validade } = req.body;
        const receita = new Receita({ validade });
        const savedReceita = receita.save();
        res.status(201).json(savedReceita);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/receitas', (req, res) => {
    try {
        const { validade } = req.body;
        const updatedReceita = Receita.findByIdAndUpdate(
          req.params.id,
          { validade },
          { new: true }
        );
        if (!updatedReceita) {
          return res.status(404).json({ error: 'Receita not found' });
        }
        res.json(updatedReceita);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/receitas', (req, res) => {
    try {
        const deletedReceita = Receita.findByIdAndDelete(req.params.id);
        if (!deletedReceita) {
          return res.status(404).json({ error: 'Receita not found' });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;