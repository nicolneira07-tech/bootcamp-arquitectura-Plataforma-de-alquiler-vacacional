
import { PropertyService } from "../services/propertyService.js";

const service = new PropertyService();

export const createProperty = (req, res) => {
  res.json(service.create(req.body));
};

export const getProperties = (req, res) => {
  res.json(service.getAll());
};
