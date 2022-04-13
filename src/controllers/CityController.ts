import { Request, Response, NextFunction } from "express";
import { CityService } from "../services/CityService";

export class CityController {
    async create(req: Request, res: Response, next: NextFunction) {
        const { name, estate } = req.body;
        try {
            const service = new CityService();

            const result = await service.create({ name, estate });

            return res.status(201).json(result);
        } catch (err) {
            return next(err);
        }
    }

    async find(req: Request, res: Response, next: NextFunction) {
        const { name, estate } = req.query;
        try {
            const service = new CityService();

            const result = await service.find({ name, estate });

            return res.status(200).json(result);
        } catch (err) {
            return next(err);
        }
    }
}