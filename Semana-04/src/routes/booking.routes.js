
const express = require('express');
const router = express.Router();
const controller = require('../controllers/booking.controller');

router.post('/:id/bookings', controller.create);
router.get('/:id/bookings', controller.getByProperty);

module.exports = router;
