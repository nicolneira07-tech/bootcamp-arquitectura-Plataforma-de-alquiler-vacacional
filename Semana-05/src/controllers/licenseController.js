import { createLicense, getLicense } from "../services/licenseService.js";

export const create = (req, res) => {
  const { propertyId } = req.params;
  const license = createLicense(propertyId, req.body);
  res.json(license);
};

export const get = (req, res) => {
  const { propertyId } = req.params;
  const license = getLicense(propertyId);
  res.json(license);
};