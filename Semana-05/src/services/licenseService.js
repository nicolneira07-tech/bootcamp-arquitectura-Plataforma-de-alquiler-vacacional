let licenses = {};

export const createLicense = (propertyId, data) => {
  licenses[propertyId] = data;
  return data;
};

export const getLicense = (propertyId) => {
  return licenses[propertyId] || null;
};

