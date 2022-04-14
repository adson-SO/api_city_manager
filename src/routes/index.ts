import { Router } from "express";
import { CityController } from "../controllers/CityController";
import { ClientController } from "../controllers/ClientController";
import { CreateValidation } from "../validations/city/create";
import { FindValidation } from "../validations/city/find";
import { ClientCreateValidation } from "../validations/client/create";
import { ClientFindValidation } from "../validations/client/find";

export class Routes {
    handle(): Router {
        const router = Router();
        
        router.post("/city", new CreateValidation().validate, new CityController().create);
        router.get("/city", new FindValidation().validate, new CityController().find);

        router.post("/client", new ClientCreateValidation().validate, new ClientController().create);
        router.get("/client", new ClientFindValidation().validate, new ClientController().find);
        router.get("/client/:id", new ClientController().findById);
        router.delete("/client/:id", new ClientController().delete);
        router.patch("/client/:id", new ClientController().updateName);

        return router;
    }
}