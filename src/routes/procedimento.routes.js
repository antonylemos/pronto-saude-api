const router = require('express').Router();

const procedimentos = require('../controllers/procedimento.controller.js');

module.exports = app => {
  router.get('/', procedimentos.findAll);

  router.get('/:id', procedimentos.find);

  router.post('/', procedimentos.create);

  router.put('/:id', procedimentos.update);

  router.delete('/:id', procedimentos.delete);

  app.use('/procedimentos', router);
};