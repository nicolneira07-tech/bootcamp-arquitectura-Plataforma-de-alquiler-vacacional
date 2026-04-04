
let incidents = [];

exports.create = (data) => {
  const newItem = { id: Date.now(), ...data };
  incidents.push(newItem);
  return newItem;
};

exports.findByProperty = (propertyId) => {
  return incidents.filter(i => i.propertyId == propertyId);
};
