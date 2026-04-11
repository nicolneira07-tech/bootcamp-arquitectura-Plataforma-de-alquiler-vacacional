import { createBooking } from "../services/bookingService.js";

export const create = (req, res) => {
  try {
    const booking = createBooking(req.params.id, req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
