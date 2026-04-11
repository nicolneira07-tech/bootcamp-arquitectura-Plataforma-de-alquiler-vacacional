class Database {
  constructor() {
    if (Database.instance) return Database.instance;

    this.properties = [];
    this.bookings = [];

    Database.instance = this;
  }
}

const db = new Database();
export default db;