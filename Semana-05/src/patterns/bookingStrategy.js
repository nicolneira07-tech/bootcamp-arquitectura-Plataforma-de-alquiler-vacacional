export const validateLicense = (property) => {
  if (!property.license) {
    throw new Error("La propiedad no tiene licencia");
  }
};

export const validateDays = (property, days) => {
  if (days > property.maxDaysPerYear) {
    throw new Error("Excede el máximo de días permitidos");
  }
};