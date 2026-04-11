
class ReservaService {
  constructor(repository, validator) {
    this.repository = repository;
    this.validator = validator;
  }

  crearReserva(reserva) {
    this.validator.validate(reserva);
    return this.repository.save(reserva);
  }

  listarReservas() {
    return this.repository.findAll();
  }
}

module.exports = ReservaService;
