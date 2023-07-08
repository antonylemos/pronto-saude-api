const router = require('express').Router();

const itens = require('../controllers/item.controller.js');

module.exports = app => {
  router.get('/', itens.findAll);

  router.get('/:id', itens.find);

  router.post('/', itens.create);

  router.put('/:id', itens.update);

  router.delete('/:id', itens.delete);

  app.use('/itens', router);
};