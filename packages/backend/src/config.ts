import dotenv from 'dotenv';

dotenv.config();

export const config = {
	jwtSecret: process.env.JWT_SECRET_TEMP,
	jwtExpiresIn: process.env.JWT_EXPIRES_IN_TEMP,
	jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
	jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
	mailName: process.env.MAIL_NAME,
	mailPsw: process.env.MAIL_PSW,
	backendUrl: process.env.BACKEND_URL,
	frontendUrl: process.env.FRONTEND_URL,
};
