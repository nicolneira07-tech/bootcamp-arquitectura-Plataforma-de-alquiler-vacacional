
import { BookingService } from "../services/bookingService.js";

const service = new BookingService();

export const createBooking = (req, res) => {
  res.json(service.create(req.body));
};
