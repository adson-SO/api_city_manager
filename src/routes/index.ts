import { Router } from "express";
import { CityController } from "../controllers/CityController";
import { ClientController } from "../controllers/ClientController";

export class Routes {
    handle(): Router {
        const router = Router();
        
        router.post("/city", new CityController().create);
        router.get("/city", new CityController().find);

        router.post("/client", new ClientController().create);

        return router;
    }
}