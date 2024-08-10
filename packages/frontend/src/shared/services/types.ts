import { AxiosRequestConfig } from 'axios';

export interface MyAxiosRequestConfig extends AxiosRequestConfig {}

export interface IUser {
	email: string;
	username?: string;
	password: string;
	token: string;
}

export interface ChangePasswordParams {
	oldPassword: string;
	newPassword: string;
}
