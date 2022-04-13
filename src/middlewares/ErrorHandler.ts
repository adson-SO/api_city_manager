import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { BadRequest } from "../errors/BadRequest";
import { NotFound } from "../errors/NotFound";

export class ErrorHandler {
    handle(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
        let status = 500;

        if(err instanceof NotFound) {
            status = 404;
        }

        if(err instanceof BadRequest) {
            status = 400
        }

        return res.status(status).json(err);
    }
}