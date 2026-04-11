
class Reserva {
  constructor(id, propiedadId, fechaInicio, fechaFin, huesped) {
    this.id = id;
    this.propiedadId = propiedadId;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.huesped = huesped;
  }
}

module.exports = Reserva;
