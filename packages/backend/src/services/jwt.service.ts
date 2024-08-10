import { config } from '@/config';
import HttpError from '@/utils/http-error.util';
import jwt, { Secret } from 'jsonwebtoken';

export interface Config {
	jwtSecret: Secret;
	jwtExpiresIn: string | number;
	jwtRefreshExpiresIn: string | number;
	jwtRefreshSecret: Secret;
}

const { jwtSecret, jwtExpiresIn, jwtRefreshExpiresIn, jwtRefreshSecret } =
	config as Config;

export default class JwtService {
	async generateTokens(
		payload: string | object | Buffer,
	): Promise<{ token: string; refreshToken: string }> {
		if (!jwtSecret || !jwtRefreshSecret)
			throw HttpError(500, 'Server error');

		const token = jwt.sign(payload, jwtSecret, {
			expiresIn: jwtExpiresIn.toString(),
		});

		const refreshToken = jwt.sign(payload, jwtRefreshSecret, {
			expiresIn: jwtRefreshExpiresIn.toString(),
		});
		return { token, refreshToken };
	}

	verifyToken(token: string): string | jwt.JwtPayload {
		if (!jwtSecret) throw HttpError(500, 'Server error');

		return jwt.verify(token, jwtSecret);
	}

	async verifyRefreshToken(
		refreshToken: string,
	): Promise<string | jwt.JwtPayload> {
		return jwt.verify(refreshToken, jwtRefreshSecret);
	}
}
