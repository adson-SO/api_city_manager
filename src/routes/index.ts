import { Router } from "express";
import { CityController } from "../controllers/CityController";

export class Routes {
    handle(): Router {
        const router = Router();
        
        router.post("/city", new CityController().create);
        router.get("/city", new CityController().find);

        return router;
    }
}