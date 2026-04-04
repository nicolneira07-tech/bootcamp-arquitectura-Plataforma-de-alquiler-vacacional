
const repo = require('../repositories/incident.repository');

exports.create = (propertyId, data) => {
  return repo.create({ propertyId, ...data });
};

exports.getByProperty = (propertyId) => {
  return repo.findByProperty(propertyId);
};
