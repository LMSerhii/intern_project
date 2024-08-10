import { NextFunction, Request, Response } from 'express';

export type AsyncHandler = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;

export interface CustomHttpError extends Error {
	status?: number;
	message: string;
}
