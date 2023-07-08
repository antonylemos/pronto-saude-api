const router = require('express').Router();

const tratamentos = require('../controllers/tratamento.controller.js');

module.exports = app => {
  router.get('/', tratamentos.findAll);

  router.get('/:id', tratamentos.find);

  router.post('/', tratamentos.create);

  router.put('/:id', tratamentos.update);

  router.delete('/:id', tratamentos.delete);

  app.use('/tratamentos', router);
};