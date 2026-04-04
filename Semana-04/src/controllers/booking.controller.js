
const service = require('../services/booking.service');

exports.create = (req, res, next) => {
  try {
    const data = service.create(req.params.id, req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

exports.getByProperty = (req, res) => {
  const data = service.getByProperty(req.params.id);
  res.json({ success: true, data });
};
