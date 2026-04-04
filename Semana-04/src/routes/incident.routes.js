
const express = require('express');
const router = express.Router();
const controller = require('../controllers/incident.controller');

router.post('/:id/incidents', controller.create);
router.get('/:id/incidents', controller.getByProperty);

module.exports = router;
