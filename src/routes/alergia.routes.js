const router = require('express').Router();

const alergias = require('../controllers/alergia.controller.js');

module.exports = app => {
  router.get('/', alergias.findAll);

  router.get('/:id', alergias.find);

  router.post('/', alergias.create);

  router.put('/:id', alergias.update);

  router.delete('/:id', alergias.delete);

  app.use('/alergias', router);
};