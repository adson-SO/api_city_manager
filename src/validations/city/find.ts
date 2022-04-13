import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export class FindValidation {
    async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Joi.object({
                name: Joi.string().max(50).trim(),
                estate: Joi.string().max(50).trim()
            });

            const { error } = await schema.validate(req.query, { abortEarly: true });
            if(error) throw error;
            return next();
        } catch (err) {
            return res.status(400).json({
                name: err.details[0].context.label,
                description: err.message
            });
        }
    }
}