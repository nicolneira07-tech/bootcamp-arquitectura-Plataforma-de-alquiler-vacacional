
class ReservaValidator {
  validate(reserva) {
    if (!reserva.huesped) {
      throw new Error("El huésped es obligatorio");
    }

    if (new Date(reserva.fechaInicio) >= new Date(reserva.fechaFin)) {
      throw new Error("La fecha de inicio debe ser menor a la fecha de fin");
    }
  }
}

module.exports = ReservaValidator;
