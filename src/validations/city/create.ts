import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export class CreateValidation {
    async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Joi.object({
                name: Joi.string().min(5).trim().required(),
                estate: Joi.string().min(5).trim().required()
            });

            const { error } = await schema.validate(req.body, { abortEarly: true });
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