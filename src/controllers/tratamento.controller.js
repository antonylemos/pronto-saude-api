const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Tratamento } = require('../models/tratamento.model');
const TokenUtils = require('../utils/Token.utils');

const router = express.Router();
const tratamentoRepository = new TratamentoRepository();

router.get('/tratamentos', (req, res) => {
    try {
        const tratamentos = Tratamento.find();
        res.json(tratamentos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/tratamentos:id', (req, res) => {
    try {
        const tratamento = Tratamento.findById(req.params.id);
        if (!tratamento) {
          return res.status(404).json({ error: 'Tratamento not found' });
        }
        res.json(tratamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/tratamentos', (req, res) => {
    try {
        const { tipo, urgencia, tempo, status, receita } = req.body;
        const tratamento = new Tratamento({ tipo, urgencia, tempo, status, receita });
        const savedTratamento = tratamento.save();
        res.status(201).json(savedTratamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/tratamentos', (req, res) => {
    try {
        const { tipo, urgencia, tempo, status, receita } = req.body;
        const updatedTratamento = Tratamento.findByIdAndUpdate(
          req.params.id,
          { tipo, urgencia, tempo, status, receita },
          { new: true }
        );
        if (!updatedTratamento) {
          return res.status(404).json({ error: 'Tratamento not found' });
        }
        res.json(updatedTratamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/tratamentos', (req, res) => {
    try {
        const deletedTratamento = Tratamento.findByIdAndDelete(req.params.id);
        if (!deletedTratamento) {
          return res.status(404).json({ error: 'Tratamento not found' });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;