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