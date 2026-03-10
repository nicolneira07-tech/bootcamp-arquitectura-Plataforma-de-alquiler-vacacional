
class Repository {
  save(data) {
    throw new Error("Método save() debe ser implementado");
  }

  findAll() {
    throw new Error("Método findAll() debe ser implementado");
  }
}

module.exports = Repository;
