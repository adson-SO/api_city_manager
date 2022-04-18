import { App } from "../../src/app";
import request from "supertest";
import { createConnection } from "typeorm";

const app = new App().server;

let connection;

describe("client's routes", () => {

    beforeEach(async () => {
        connection = await createConnection();
        await connection.synchronize();
    });

    afterEach(() => {
        connection.close();
    });

    it("should create a new client", async () => {
        const result = await request(app).post("/api/v1/client").send({
            fullname: "Name Test",
            gender: "m",
            birthdate: "12/04/2002",
            age: 20,
            city_id: "e5880de8-aaac-4b40-8651-3d4d422eb2ec"
        });

        expect(result.statusCode).toBe(201);
    })
});