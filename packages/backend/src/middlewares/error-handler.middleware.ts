import { CustomHttpError } from '@/types/middlewares.type';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (
	err: CustomHttpError,
	req: Request,
	res: Response,
	_: NextFunction,
): void => {
	const { status = 500, message = 'Server error' } = err;

	res.status(status).send(message);
};

export default errorHandler;
