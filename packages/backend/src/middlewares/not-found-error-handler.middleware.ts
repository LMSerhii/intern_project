import { Request, Response } from 'express';

const notFoundErrorHandler = (_: Request, res: Response): void => {
	res.status(404).send('Route Not found');
};

export default notFoundErrorHandler;
