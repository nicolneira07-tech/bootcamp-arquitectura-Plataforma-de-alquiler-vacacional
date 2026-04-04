
const repo = require('../repositories/property.repository');

exports.getAll = ({ page = 1, limit = 10 }) => {
  return repo.findAll(page, limit);
};

exports.getById = (id) => repo.findById(id);

exports.create = (data) => repo.create(data);

exports.update = (id, data) => repo.update(id, data);

exports.remove = (id) => repo.remove(id);
