const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Procedimento } = require('../models/procedimento.model');
const TokenUtils = require('../utils/Token.utils');

const router = express.Router();
const procedimentoRepository = new ProcedimentoRepository();

router.get('/procedimentos', (req, res) => {
    try {
        const procedimentos = Procedimento.find();
        res.json(procedimentos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/procedimentos:id', (req, res) => {
    try {
        const procedimento = Procedimento.findById(req.params.id);
        if (!procedimento) {
          return res.status(404).json({ error: 'Procedimento not found' });
        }
        res.json(procedimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/procedimentos', (req, res) => {
    try {
        const { categoria, descricao, medico, data, paciente, estabelecimento } = req.body;
        const procedimento = new Procedimento({ categoria, descricao, medico, data, paciente, estabelecimento });
        const savedProcedimento = procedimento.save();
        res.status(201).json(savedProcedimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/procedimentos', (req, res) => {
    try {
        const { categoria, descricao, medico, data, paciente, estabelecimento } = req.body;
        const updatedProcedimento = Procedimento.findByIdAndUpdate(
          req.params.id,
          { categoria, descricao, medico, data, paciente, estabelecimento },
          { new: true }
        );
        if (!updatedProcedimento) {
          return res.status(404).json({ error: 'Procedimento not found' });
        }
        res.json(updatedProcedimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/procedimentos', (req, res) => {
    try {
        const deletedProcedimento = Procedimento.findByIdAndDelete(req.params.id);
        if (!deletedProcedimento) {
          return res.status(404).json({ error: 'Procedimento not found' });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;