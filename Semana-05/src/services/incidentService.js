let incidents = {};

export const createIncident = (propertyId, data) => {
  if (!incidents[propertyId]) {
    incidents[propertyId] = [];
  }

  const newIncident = {
    description: data.description,
    date: new Date()
  };

  incidents[propertyId].push(newIncident);

  return newIncident;
};

export const getIncidents = (propertyId) => {
  return incidents[propertyId] || [];
};