import { PASSWD_REGEX } from '@/constans/regex';
import Joi from 'joi';

const errorPswMessage = `
Requires at least one lowercase letter (a-z) 
Requires at least one uppercase letter (A-Z)
Requires at least one digit (0-9)
Requires at least one special character among !@#_$%^&*
Requires a password length between 8 and 128 characters.`;

export const registerUserSchema = Joi.object({
	username: Joi.string(),
	email: Joi.string().email().required(),
	password: Joi.string()
		.regex(PASSWD_REGEX)
		.required()
		.error(new Error(errorPswMessage)),
}).options({ abortEarly: false });

export const loginUserSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
}).options({ abortEarly: false });

export const emailUserSchema = Joi.object({
	email: Joi.string()
		.email()
		.required()
		.error(new Error('missing required field email')),
});

export const passwordUserSchema = Joi.object({
	password: Joi.string()
		.regex(PASSWD_REGEX)
		.required()
		.error(new Error(errorPswMessage)),
	otp: Joi.string().required().error(new Error(errorPswMessage)),
});

export const passwordChangeSchema = Joi.object({
	oldPassword: Joi.string().required(),
	newPassword: Joi.string()
		.regex(PASSWD_REGEX)
		.required()
		.error(new Error(errorPswMessage)),
});
