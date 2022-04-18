import { App } from "../../src/app";
import request from "supertest";
import { createConnection } from "typeorm";

const app = new App().server;

let connection;

describe("city's routes", () => {

    beforeEach(async () => {
        connection = await createConnection();
        await connection.synchronize();
    });

    afterEach(() => {
        connection.close();
    });

    it("should create a new city", async () => {
        const result = await request(app).post("/api/v1/city").send({
            name: "Recife",
            estate: "Pernambuco"
        });

        expect(result.statusCode).toBe(201);
    });

    it("should not create a new city with an empty body", async () => {
        const result = await request(app).post("/api/v1/city").send({});

        expect(result.statusCode).toBe(400);
    });

    it("should not create a new city without field name", async () => {
        const result = await request(app).post("/api/v1/city").send({
            estate: "Pernambuco"
        });

        expect(result.statusCode).toBe(400);
    });

    it("should not create a new city without field estate", async () => {
        const result = await request(app).post("/api/v1/city").send({
            name: "Recife"
        });

        expect(result.statusCode).toBe(400);
    });
});