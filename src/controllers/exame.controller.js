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