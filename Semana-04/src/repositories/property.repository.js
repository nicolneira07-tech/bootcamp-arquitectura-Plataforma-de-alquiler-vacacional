
let properties = [];

exports.findAll = (page, limit) => {
  return properties.slice((page - 1) * limit, page * limit);
};

exports.findById = (id) => {
  return properties.find(p => p.id == id);
};

exports.create = (data) => {
  const newItem = { id: Date.now(), ...data };
  properties.push(newItem);
  return newItem;
};

exports.update = (id, data) => {
  const index = properties.findIndex(p => p.id == id);
  properties[index] = { ...properties[index], ...data };
  return properties[index];
};

exports.remove = (id) => {
  properties = properties.filter(p => p.id != id);
};
