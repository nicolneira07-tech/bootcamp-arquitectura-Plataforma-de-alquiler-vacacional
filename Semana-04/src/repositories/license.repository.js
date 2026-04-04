
let licenses = [];

exports.create = (data) => {
  const newItem = { id: Date.now(), ...data };
  licenses.push(newItem);
  return newItem;
};

exports.findByProperty = (propertyId) => {
  return licenses.find(l => l.propertyId == propertyId);
};
