
export class BookingFacade {
  constructor(propertyModel, paymentAdapter, eventBus) {
    this.propertyModel = propertyModel;
    this.paymentAdapter = paymentAdapter;
    this.eventBus = eventBus;
  }

  createBooking(data) {
    const property = this.propertyModel.getById(data.propertyId);

    const payment = this.paymentAdapter.pay(property.pricePerNight);

    const booking = {
      ...data,
      total: property.pricePerNight
    };

    this.eventBus.emit("bookingCreated", booking);

    return { booking, payment };
  }
}
