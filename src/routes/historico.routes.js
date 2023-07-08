const router = require('express').Router();

const historicos = require('../controllers/historico.controller.js');

module.exports = app => {
  router.get('/', historicos.findAll);

  router.get('/:id', historicos.find);

  router.post('/', historicos.create);

  router.put('/:id', historicos.update);

  router.delete('/:id', historicos.delete);

  app.use('/historicos', router);
};