
const express = require('express');
const router = express.Router();
const controller = require('../controllers/license.controller');

router.post('/:id/license', controller.create);
router.get('/:id/license', controller.getByProperty);

module.exports = router;
