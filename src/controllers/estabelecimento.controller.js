const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Estabelecimento } = require('../models/estabelecimento.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const estabelecimentoRepository = new EstabelecimentoRepository();

router.get('/estabelecimentos', (req, res) => {
    try {
        // const estabelecimentos = Estabelecimento.find();
        // res.json(estabelecimentos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/estabelecimentos:id', (req, res) => {
    try {
        // const estabelecimento = Estabelecimento.findById(req.params.id);
        // if (!estabelecimento) {
        //   return res.status(404).json({ error: 'Estabelecimento not found' });
        // }
        // res.json(estabelecimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/estabelecimentos', (req, res) => {
    try {
        const { nome, endereco, planosSaude } = req.body;
        // const estabelecimento = new Estabelecimento({ nome, endereco, planosSaude });
        // const savedEstabelecimento = estabelecimento.save();
        // res.status(201).json(savedEstabelecimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/estabelecimentos', (req, res) => {
    try {
        const { nome, endereco, planosSaude } = req.body;
        // const updatedEstabelecimento = Estabelecimento.findByIdAndUpdate(
        //   req.params.id,
        //   { nome, endereco, planosSaude },
        //   { new: true }
        // );
        // if (!updatedEstabelecimento) {
        //   return res.status(404).json({ error: 'Estabelecimento not found' });
        // }
        // res.json(updatedEstabelecimento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/estabelecimentos', (req, res) => {
    try {
        // const deletedEstabelecimento = Estabelecimento.findByIdAndDelete(req.params.id);
        // if (!deletedEstabelecimento) {
        //   return res.status(404).json({ error: 'Estabelecimento not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;