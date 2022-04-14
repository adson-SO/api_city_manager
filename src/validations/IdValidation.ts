import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export class IdValidation {
    async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Joi.object({
                id: Joi.string().guid({ version: "uuidv4" })
            });

            const { error } = await schema.validate(req.params, { abortEarly: true });
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