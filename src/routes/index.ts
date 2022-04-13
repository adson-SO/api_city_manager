import { Router } from "express";
import { CityController } from "../controllers/CityController";
import { ClientController } from "../controllers/ClientController";
import { CreateValidation } from "../validations/city/create";

export class Routes {
    handle(): Router {
        const router = Router();
        
        router.post("/city", new CreateValidation().validate, new CityController().create);
        router.get("/city", new CityController().find);

        router.post("/client", new ClientController().create);
        router.get("/client", new ClientController().find);
        router.get("/client/:id", new ClientController().findById);
        router.delete("/client/:id", new ClientController().delete);
        router.patch("/client/:id", new ClientController().updateName);

        return router;
    }
}