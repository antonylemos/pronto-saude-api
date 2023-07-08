const router = require('express').Router();

const estabelecimentos = require('../controllers/estabelecimento.controller.js');

module.exports = app => {
  router.get('/', estabelecimentos.findAll);

  router.get('/:id', estabelecimentos.find);

  router.post('/', estabelecimentos.create);

  router.put('/:id', estabelecimentos.update);

  router.delete('/:id', estabelecimentos.delete);

  app.use('/estabelecimentos', router);
};