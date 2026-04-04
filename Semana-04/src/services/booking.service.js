
const bookingRepo = require('../repositories/booking.repository');
const propertyRepo = require('../repositories/property.repository');
const licenseRepo = require('../repositories/license.repository');

exports.create = (propertyId, data) => {
  const property = propertyRepo.findById(propertyId);
  const license = licenseRepo.findByProperty(propertyId);

  if (!license || !license.valid) {
    throw new Error("Sin licencia válida");
  }

  const bookings = bookingRepo.findByProperty(propertyId);
  const totalDays = bookings.reduce((acc, b) => acc + b.days, 0);

  if (totalDays + data.days > property.maxDaysPerYear) {
    throw new Error("Excede límite de días");
  }

  return bookingRepo.create({ propertyId, ...data });
};
