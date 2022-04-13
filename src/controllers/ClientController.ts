import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";
import { ClientService } from "../services/ClientService";

export class ClientController {
    async create(req: Request, res: Response, next: NextFunction) {
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

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            const service = new ClientService();

            await service.delete({ id });

            return res.status(204).end();
        } catch (err) {
            return next(err);
        }
    }

    async updateName(req: Request, res: Response) {
        const { id } = req.params;
        const { fullname } = req.body;
        try {
            const service = new ClientService();

            const result = await service.updateName({ id, fullname });

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}