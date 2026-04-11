import db from "../patterns/db.js";
import eventBus from "../patterns/eventBus.js";
import { validateLicense, validateDays } from "../patterns/bookingStrategy.js";
import { logBooking } from "../observers/logObserver.js";

// suscripción
eventBus.on("bookingCreated", logBooking);

export const createBooking = (propertyId, data) => {
  const property = db.properties.find(p => p.id == propertyId);

  if (!property) throw new Error("Propiedad no encontrada");

  validateLicense(property);
  validateDays(property, data.days);

  const booking = {
    id: Date.now(),
    propertyId,
    ...data
  };

  db.bookings.push(booking);

  eventBus.emit("bookingCreated", booking);

  return booking;
};