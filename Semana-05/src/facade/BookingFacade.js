export class BookingFacade {
  constructor(propertyModel, paymentAdapter, eventBus) {
    this.propertyModel = propertyModel;
    this.paymentAdapter = paymentAdapter;
    this.eventBus = eventBus;
  }

  createBooking({ property }) {
    if (!property) {
      throw new Error("Property is required");
    }

    if (!property.pricePerNight) {
      throw new Error("pricePerNight is required");
    }

    const total = property.pricePerNight;

    this.paymentAdapter.pay(total);

    this.eventBus.emit("bookingCreated", { property });

    return {
      booking: {
        property,
        total
      }
  
    };
  }

}

