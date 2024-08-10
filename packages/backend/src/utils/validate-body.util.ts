import { NextFunction, Request, Response } from 'express';
import HttpError from './http-error.util';
import { Schema } from 'joi';

const validateBody =
	(schema: Schema) =>
	(req: Request, _: Response, next: NextFunction): void => {
		const { error } = schema.validate(req.body);

		if (error) return next(HttpError(400, error.message));

		next();
	};

export default validateBody;
