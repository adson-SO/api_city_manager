import "reflect-metadata";
import express from "express";
import { Routes } from "./routes"
import "./infra/database/postgres";

export class App {
    public server: any;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(): void {
        this.server.use(express.json());
    }

    routes(): void {
        this.server.use("/api/v1", new Routes().handle())
    }
}