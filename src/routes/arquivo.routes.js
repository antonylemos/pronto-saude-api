const router = require('express').Router();

const arquivos = require('../controllers/arquivo.controller.js');

module.exports = app => {
  router.get('/', arquivos.findAll);

  router.get('/:id', arquivos.find);

  router.post('/', arquivos.create);

  router.put('/:id', arquivos.update);

  router.delete('/:id', arquivos.delete);

  app.use('/arquivos', router);
};