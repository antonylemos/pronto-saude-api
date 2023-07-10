const authMiddleware = require('../middleware/auth');

const router = require('express').Router();

const procedures = require('../controllers/procedure.controller.js');

module.exports = app => {
  router.get('/', authMiddleware, procedures.findAll);

  router.get('/:id', procedures.find);

  router.post('/', authMiddleware, procedures.create);

  router.put('/:id', procedures.update);

  router.delete('/:id', procedures.delete);

  app.use('/procedures', router);
};