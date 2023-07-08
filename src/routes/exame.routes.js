const router = require('express').Router();

const exames = require('../controllers/exame.controller.js');

module.exports = app => {
  router.get('/', exames.findAll);

  router.get('/:id', exames.find);

  router.post('/', exames.create);

  router.put('/:id', exames.update);

  router.delete('/:id', exames.delete);

  app.use('/exames', router);
};