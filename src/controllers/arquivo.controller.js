const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Arquivo } = require('../models/arquivo.model');
const TokenUtils = require('../utils/token.utils');

const router = express.Router();
// const arquivoRepository = new ArquivoRepository();

router.get('/arquivos', (req, res) => {
    try {
        // const arquivos = Arquivo.find();
        res.json(arquivos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/arquivos:id', (req, res) => {
    try {
        // const arquivo = Arquivo.findById(req.params.id);
        // if (!arquivo) {
        //   return res.status(404).json({ error: 'Arquivo not found' });
        // }
        // res.json(arquivo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/arquivos', (req, res) => {
    try {
        const { titulo, imagem, data } = req.body;
        // const arquivo = new Arquivo({ titulo, imagem, data });
        // const savedArquivo = arquivo.save();
        // res.status(201).json(savedArquivo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/arquivos', (req, res) => {
    try {
        const { titulo, imagem, data } = req.body;
        // const updatedArquivo = Arquivo.findByIdAndUpdate(
        //   req.params.id,
        //   { titulo, imagem, data },
        //   { new: true }
        // );
        // if (!updatedArquivo) {
        //   return res.status(404).json({ error: 'Arquivo not found' });
        // }
        // res.json(updatedArquivo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/arquivos', (req, res) => {
    try {
        // const deletedArquivo = Arquivo.findByIdAndDelete(req.params.id);
        // if (!deletedArquivo) {
        //   return res.status(404).json({ error: 'Arquivo not found' });
        // }
        // res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;