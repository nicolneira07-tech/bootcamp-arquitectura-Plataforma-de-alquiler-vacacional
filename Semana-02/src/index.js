
const Reserva = require("./domain/entities/reserva");
const MemoryRepository = require("./repositories/memory-repository");
const ReservaValidator = require("./validators/reserva-validator");
const ReservaService = require("./services/reserva-service");

const repository = new MemoryRepository();
const validator = new ReservaValidator();
const service = new ReservaService(repository, validator);

const nuevaReserva = new Reserva(
  1,
  101,
  "2026-07-01",
  "2026-07-05",
  "Nicol Neira"
);

service.crearReserva(nuevaReserva);

console.log(service.listarReservas());
