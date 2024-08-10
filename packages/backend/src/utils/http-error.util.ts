import { CustomHttpError } from '@/types/middlewares.type';

export const messageList: { [key: number]: string } = {
	400: 'Bad Request',
	401: 'Unauthorized',
	403: 'Forbidden',
	404: 'Not Found',
	409: 'Conflict',
};

const HttpError = (
	status: number,
	message: string = messageList[status],
): CustomHttpError => {
	const error = new Error(message) as CustomHttpError;
	error.status = status;

	return error;
};

export default HttpError;
