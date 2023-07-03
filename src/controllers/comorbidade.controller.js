const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Comorbidade } = require('../models/comorbidade.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const comorbidadeRepository = new ComorbidadeRepository();

router.get('/comorbidades', (req, res) => {
    try {
        // const comorbidades = Comorbidade.find();
        // res.json(comorbidades);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/comorbidades:id', (req, res) => {
    try {
        // const comorbidade = Comorbidade.findById(req.params.id);
        // if (!comorbidade) {
        //   return res.status(404).json({ error: 'Comorbidade not found' });
        // }
        // res.json(comorbidade);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/comorbidades', (req, res) => {
    try {
        const { nome, gravidade } = req.body;
        // const comorbidade = new Comorbidade({ nome, gravidade });
        // const savedComorbidade = comorbidade.save();
        // res.status(201).json(savedComorbidade);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/comorbidades', (req, res) => {
    try {
        const { nome, gravidade } = req.body;
        // const updatedComorbidade = Comorbidade.findByIdAndUpdate(
        //   req.params.id,
        //   { nome, gravidade },
        //   { new: true }
        // );
        // if (!updatedComorbidade) {
        //   return res.status(404).json({ error: 'Comorbidade not found' });
        // }
        // res.json(updatedComorbidade);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/comorbidades', (req, res) => {
    try {
        // const deletedComorbidade = Comorbidade.findByIdAndDelete(req.params.id);
        // if (!deletedComorbidade) {
        //   return res.status(404).json({ error: 'Comorbidade not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;