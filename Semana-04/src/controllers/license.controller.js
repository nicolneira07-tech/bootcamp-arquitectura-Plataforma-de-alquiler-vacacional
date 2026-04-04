
const service = require('../services/license.service');

exports.create = (req, res) => {
  const data = service.create(req.params.id, req.body);
  res.status(201).json({ success: true, data });
};

exports.getByProperty = (req, res) => {
  const data = service.getByProperty(req.params.id);
  res.json({ success: true, data });
};
