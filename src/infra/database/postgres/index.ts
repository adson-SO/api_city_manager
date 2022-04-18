import { createConnection } from 'typeorm';

class Database {
  constructor() {
      this.connect();
  }

  connect(): void {
    createConnection();
  }
}

export default new Database().connect();
