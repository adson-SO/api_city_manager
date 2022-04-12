import { DataSource } from 'typeorm';

export default new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "admin",
    "password": "admin",
    "database": "postgres",
    "synchronize": false,
    "migrations": [
        "src/infra/database/postgres/migrations/*.ts"
    ]
});