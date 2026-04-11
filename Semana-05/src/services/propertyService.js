import db from "../patterns/db.js";
import { PropertyFactory } from "../patterns/propertyFactory.js";

export const getAllProperties = () => db.properties;

export const createProperty = (data) => {
  const property = PropertyFactory.create(data);
  db.properties.push(property);
  return property;
};