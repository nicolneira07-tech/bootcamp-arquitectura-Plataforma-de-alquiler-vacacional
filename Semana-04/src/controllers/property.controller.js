
const service = require('../services/property.service');

exports.getAll = (req, res) => {
  const data = service.getAll(req.query);
  res.json({ success: true, data });
};

exports.getById = (req, res) => {
  const data = service.getById(req.params.id);
  if (!data) {
    return res.status(404).json({ success: false });
  }
  res.json({ success: true, data });
};

exports.create = (req, res) => {
  const data = service.create(req.body);
  res.status(201).json({ success: true, data });
};

exports.update = (req, res) => {
  const data = service.update(req.params.id, req.body);
  res.json({ success: true, data });
};

exports.partialUpdate = (req, res) => {
  const data = service.update(req.params.id, req.body);
  res.json({ success: true, data });
};

exports.remove = (req, res) => {
  service.remove(req.params.id);
  res.status(204).send();
};
