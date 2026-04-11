import { createIncident, getIncidents } from "../services/incidentService.js";

export const create = (req, res) => {
  try {
    const incident = createIncident(req.params.id, req.body);
    res.status(201).json(incident);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = (req, res) => {
  try {
    const incidents = getIncidents(req.params.id);
    res.json(incidents);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};