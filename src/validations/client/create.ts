const Joi = require('joi')
.extend(require('@joi/date'));
import { Request, Response, NextFunction } from "express";

export class ClientCreateValidation {
    async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Joi.object({
                fullname: Joi.string().min(5).trim().required(),
                gender: Joi.string().valid("m", "f").trim().required(),
                birthdate: Joi.date().format("DD/MM/YYYY").raw().required(),
                age: Joi.number().integer().required(),
                city_id: Joi.string().guid({ version: "uuidv4" }).trim().required()
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