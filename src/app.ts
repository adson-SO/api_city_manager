import "reflect-metadata";

import express from "express";

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
        
    }
}