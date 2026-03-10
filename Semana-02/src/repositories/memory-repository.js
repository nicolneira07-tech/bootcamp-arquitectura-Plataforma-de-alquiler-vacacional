
const Repository = require("../domain/interfaces/repository");

class MemoryRepository extends Repository {
  constructor() {
    super();
    this.data = [];
  }

  save(item) {
    this.data.push(item);
    return item;
  }

  findAll() {
    return this.data;
  }
}

module.exports = MemoryRepository;
