const propertyRoutes = require('./routes/property.routes');
const licenseRoutes = require('./routes/license.routes');
const bookingRoutes = require('./routes/booking.routes');
const incidentRoutes = require('./routes/incident.routes');

app.use('/api/v1/properties', propertyRoutes);
app.use('/api/v1/properties', licenseRoutes);
app.use('/api/v1/properties', bookingRoutes);
app.use('/api/v1/properties', incidentRoutes);
