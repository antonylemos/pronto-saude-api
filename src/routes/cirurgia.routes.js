const router = require('express').Router();

const cirurgias = require('../controllers/cirurgia.controller.js');

module.exports = app => {
  router.get('/', cirurgias.findAll);

  router.get('/:id', cirurgias.find);

  router.post('/', cirurgias.create);

  router.put('/:id', cirurgias.update);

  router.delete('/:id', cirurgias.delete);

  app.use('/cirurgias', router);
};