import { App } from "../../src/app";
import request from "supertest";
import { createConnection } from "typeorm";

const app = new App().server;

let connection, server;

describe("city's routes", () => {

    beforeEach(async () => {
        connection = await createConnection();
        await connection.synchronize();
        server = app.listen(3000)
    });

    afterEach(() => {
        connection.close();
        server.close();
    });

    it("should create a new city", async () => {
        const result = await request(app).post("/api/v1/city").send({
            name: "Recife",
            estate: "Pernambuco"
        });

        expect(result.statusCode).toBe(201);
    });
    
});