const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Alergia } = require('../models/alergia.model');
const TokenUtils = require('../utils/Token.utils');

const router = express.Router();
const alergiaRepository = new AlergiaRepository();

router.get('/alergias', (req, res) => {
    try {
        const alergias = Alergia.find();
        res.json(alergias);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/alergias:id', (req, res) => {
    try {
        const alergia = Alergia.findById(req.params.id);
        if (!alergia) {
          return res.status(404).json({ error: 'Alergia not found' });
        }
        res.json(alergia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/alergias', (req, res) => {
    try {
        const { nome, grau } = req.body;
        const alergia = new Alergia({ nome, grau });
        const savedAlergia = alergia.save();
        res.status(201).json(savedAlergia);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/alergias', (req, res) => {
    try {
        const { nome, grau } = req.body;
        const updatedAlergia = Alergia.findByIdAndUpdate(
          req.params.id,
          { nome, grau },
          { new: true }
        );
        if (!updatedAlergia) {
          return res.status(404).json({ error: 'Alergia not found' });
        }
        res.json(updatedAlergia);
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