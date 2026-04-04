
let bookings = [];

exports.create = (data) => {
  const newItem = { id: Date.now(), ...data };
  bookings.push(newItem);
  return newItem;
};

exports.findByProperty = (propertyId) => {
  return bookings.filter(b => b.propertyId == propertyId);
};
