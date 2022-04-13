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

    async find(req: Request, res: Response) {
        const { fullname, gender, birthdate, age } = req.query;
        try {
            const service = new ClientService();

            const result = await service.find({ fullname, gender, birthdate, age });

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const service = new ClientService();

            const result = await service.findById({ id });

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}