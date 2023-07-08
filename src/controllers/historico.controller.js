
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const db = require('../models');

const Historico = db.historicos;

const s3 = new aws.S3();

exports.findAll = async (req, res) => {
  try {
    const response = await Historico.findAll({});
    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving list.' });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Historico.findByPk(id);

    if (!response) {
      return res.status(404).send({ message: 'Object not found.' });
    }

    res.send(response);
  } catch (err) {
    res.status(500).send({ message: err.message || `Error retrieving object with id=${id}` });
  }
};

exports.create = async (req, res) => {
  try {
    const response = await Historico.create({ ...req.body });
    res.send(response);
  } catch (err) {
    let errorMessage = err.message || 'Error creating object'
    res.status(500).send({ message: errorMessage });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Historico.update({ ...req.body}, { where: { id } });

    if (response == 1) {
      res.send({ message: 'Object was updated successfully.' });
    } else {
      res.send({ message: `Cannot update object with id=${id}` });
    }
  } catch (err) {
    let errorMessage = err.message || `Error updating object with id=${id}`
    res.status(500).send({ message: errorMessage });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Historico.destroy({ where: { id}, truncate: false })

    if (response == 1) {
      res.send({ message: 'Object was deleted successfully.' });
    } else {
      res.send({ message: `Cannot delete object with id=${id}` });
    }
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while removing this object.' });
  }
};

// CONTROLLER ANTIGO
/*const express = require('express');
const router = express.Router();
const Procedure = require('../models/procedimento.model');

// Enum de categorias
const Categoria = {
    Exame: 'Exame',
    Cirurgia: 'Cirurgia',
};

// Rota para buscar os procedimentos do usuário com opção de filtro
router.get('/procedimentos', async (req, res) => {
    try {
        // Extrai os parâmetros de consulta do request
        const { descricao, categoria, especialidade } = req.query;

        // Monta o objeto de filtro com base nos parâmetros de consulta recebidos
        const filtro = {};
        if (descricao) {
            // Cria uma expressão regular para buscar a palavra digitada em qualquer parte da descrição
            const descricaoRegex = new RegExp(descricao, 'i');
            filtro.descricao = descricaoRegex;
        }
        if (categoria) {
            filtro.categoria = categoria;
        }
        if (especialidade) {
            filtro.especialidade = especialidade;
        }

        // Realiza a consulta no banco de dados com base no filtro
        const procedimentos = await Procedure.find(filtro, 'categoria descricao especialidade data');

        res.json(procedimentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar os procedimentos.' });
    }
});

// Rota para obter as opções de categoria
router.get('/categorias', (req, res) => {
    const categorias = Object.values(Categoria);
    res.json(categorias);
});

// Rota para obter as opções de especialidade
router.get('/especialidades', async (req, res) => {
    try {
        // Obter as especialidades disponíveis do banco de dados
        const especialidades = await Procedure.distinct('especialidade');

        res.json(especialidades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar as especialidades.' });
    }
});

// Rota para obter todos os procedimentos em JSON
router.get('/procedimentos', async (req, res) => {
    try {
        const procedimentos = await Procedure.find();
        res.json(procedimentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar os procedimentos.' });
    }
});

module.exports = router;
*/