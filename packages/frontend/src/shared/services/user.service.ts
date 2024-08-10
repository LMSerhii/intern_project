import HttpService from './http';
import { IUser } from './types';

class UserService extends HttpService {
	constructor() {
		super();
	}

	async register(data: Pick<IUser, 'email' | 'password'>): Promise<void> {
		await this.post({ url: 'users/register', data }, false);
	}

	async login(data: Pick<IUser, 'email' | 'password'>): Promise<{
		user: Pick<IUser, 'email' | 'username'>;
		token: string;
	}> {
		const response = await this.post({ url: 'users/login', data }, false);
		return response.data;
	}

	async logout(): Promise<void> {
		await this.post({ url: 'users/logout' }, true);
	}

	async current(): Promise<IUser> {
		const response = await this.get({ url: 'users/current' }, true);
		return response.data;
	}

	async changePassword(data: {
		oldPassword: string;
		newPassword: string;
	}): Promise<void> {
		await this.post({ url: 'users/change-password', data }, true);
	}

	async forgotPassword(data: { email: string }): Promise<void> {
		await this.post({ url: 'users/forgot-password', data }, false);
	}

	async resetPassword(data: {
		password: string;
		otp: string;
	}): Promise<void> {
		await this.post({ url: 'users/reset-password', data }, false);
	}
}

export default new UserService();
