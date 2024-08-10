import { AsyncHandler } from '@/types/middlewares.type';
import { NextFunction, Request, Response } from 'express';

const catchAsync =
	(fn: AsyncHandler) =>
	(req: Request, res: Response, next: NextFunction): void => {
		fn(req, res, next).catch((err) => next(err));
	};

export default catchAsync;
