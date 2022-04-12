import { createConnection } from 'typeorm';
import DataSource from "../../../../ormconfig"

class Database {
  constructor() {
      this.connect();
  }

  connect(): void {
    createConnection()
    .then(() => console.log("Connected to DB"));
  }
}

export default new Database().connect();
