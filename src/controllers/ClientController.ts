import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

export class ClientController {
    async create(req: Request, res: Response) {
        const { fullname, gender, birthdate, age, city_id } = req.body;
        try {
            const service = new ClientService();

            const result = await service.create({ fullname, gender, birthdate, age, city_id });

            return res.status(201).json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}