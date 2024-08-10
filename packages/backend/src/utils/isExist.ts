import { NextFunction, Request, Response } from 'express';
import HttpError from './http-error.util';

export type ModelType<T> = {
	findUnique: (args: { where: { id: number } }) => Promise<T | null>;
};

const isExist = <T>(model: ModelType<T>) => {
	return async (
		req: Request,
		_: Response,
		next: NextFunction,
	): Promise<void> => {
		const id = parseInt(req.params.id);

		if (isNaN(id)) next(HttpError(400, 'Invalid ID format'));

		const entity = await model.findUnique({
			where: { id },
		});

		if (!entity) next(HttpError(404, 'Not found'));

		next();
	};
};

export default isExist;
