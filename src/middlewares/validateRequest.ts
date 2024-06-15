import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation check
      await schema.parseAsync({ body: req.body, cookies: req.cookies });

      // if everything all right then next()  ->
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
