const router = require('express').Router();

const receitas = require('../controllers/receita.controller.js');

module.exports = app => {
  router.get('/', receitas.findAll);

  router.get('/:id', receitas.find);

  router.post('/', receitas.create);

  router.put('/:id', receitas.update);

  router.delete('/:id', receitas.delete);

  app.use('/receitas', router);
};