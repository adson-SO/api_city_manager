import "reflect-metadata";
import express from "express";
import { Routes } from "./routes"
import { ErrorHandler } from "./middlewares/ErrorHandler";
import "./infra/database/postgres";

export class App {
    public server: any;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.errors();
    }

    middlewares(): void {
        this.server.use(express.json());
    }

    routes(): void {
        this.server.use("/api/v1", new Routes().handle())
    }

    errors(): void {
        this.server.use(new ErrorHandler().handle);
    }
}