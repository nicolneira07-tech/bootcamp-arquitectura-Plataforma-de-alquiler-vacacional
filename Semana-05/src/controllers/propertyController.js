import { getAllProperties, createProperty } from "../services/propertyService.js";

export const getProperties = (req, res) => {
  res.json(getAllProperties());
};

export const create = (req, res) => {
  const property = createProperty(req.body);
  res.status(201).json(property);
};
