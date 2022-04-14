const Joi = require('joi')
.extend(require('@joi/date'));
import { Request, Response, NextFunction } from "express";

export class ClientFindValidation {
    async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Joi.object({
                fullname: Joi.string().min(5).trim(),
                gender: Joi.string().valid("m", "f").trim(),
                birthdate: Joi.date().format("DD/MM/YYYY").raw(),
                age: Joi.number().integer()
            });

            const { error } = await schema.validate(req.query, { abortEarly: true });
            if(error) throw error;
            return next();
        } catch (err) {
            return res.status(400).json({
                name: err.details[0].context.label,
                description: err.message
            })
        }
    }
}