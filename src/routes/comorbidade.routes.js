const router = require('express').Router();

const comorbidades = require('../controllers/comorbidade.controller.js');

module.exports = app => {
  router.get('/', comorbidades.findAll);

  router.get('/:id', comorbidades.find);

  router.post('/', comorbidades.create);

  router.put('/:id', comorbidades.update);

  router.delete('/:id', comorbidades.delete);

  app.use('/comorbidades', router);
};