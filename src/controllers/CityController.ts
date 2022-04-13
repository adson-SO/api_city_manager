import { Request, Response } from "express";
import { CityService } from "../services/CityService";

export class CityController {
    async create(req: Request, res: Response) {
        const { name, estate } = req.body;
        try {
            const service = new CityService();

            const result = await service.create({ name, estate });

            return res.status(201).json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async find(req: Request, res: Response) {
        const { name, estate } = req.query;
        try {
            const service = new CityService();

            const result = await service.find({ name, estate });

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}