
import { BookingFacade } from "../patterns/facade/BookingFacade.js";
import { PaymentAdapter } from "../patterns/adapter/PaymentAdapter.js";
import { EventBus } from "../patterns/observer/EventBus.js";
import { EmailObserver, LogObserver } from "../patterns/observer/Observers.js";
import { PropertyModel } from "../models/propertyModel.js";
import { NormalStrategy } from "../patterns/strategy/PricingStrategies.js";

const eventBus = new EventBus();
eventBus.on("bookingCreated", EmailObserver);
eventBus.on("bookingCreated", LogObserver);

const propertyModel = new PropertyModel();
const paymentAdapter = new PaymentAdapter();

const facade = new BookingFacade(propertyModel, paymentAdapter, eventBus);

export class BookingService {
  create(data) {
    const strategy = new NormalStrategy();
    const result = facade.createBooking(data);
    result.booking.total = strategy.calculate(result.booking.total);
    return result;
  }
}
