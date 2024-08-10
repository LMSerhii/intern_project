import JwtService from '@/services/jwt.service';
import UserService from '@/services/user.service';
import HttpError from '@/utils/http-error.util';
import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export default class AuthMiddleware {
	private jwtService = new JwtService();
	private userService = new UserService();

	async auth(req: Request, _: Response, next: NextFunction): Promise<void> {
		const { authorization = '' } = req.headers;

		const [bearer, token] = authorization.split(' ');

		if (bearer !== 'Bearer') throw HttpError(401);

		const id = this.verifyUserToken(token);

		const user = await this.userService.findUserById(id);

		if (!user || !user.token || user.token !== token) {
			return next(HttpError(401));
		}
		req.user = user;
		next();
	}

	verifyUserToken(token: string): number {
		const { payload: id } = this.jwtService.verifyToken(
			token,
		) as JwtPayload;
		return parseInt(id);
	}
}
