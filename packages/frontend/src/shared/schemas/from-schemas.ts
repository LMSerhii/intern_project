// form-schemas.ts
import * as yup from 'yup';

export const forgotPasswordSchema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
});

export const loginSchema = yup.object().shape({
	email: yup.string().required('Email is required'),
	password: yup.string().required('Password is required'),
});

export const registrationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Confirm Password is required'),
});

export const resetPasswordSchema = yup.object().shape({
	newPassword: yup
		.string()
		.required('New Password is required')
		.min(6, 'New Password must be at least 6 characters long'),
	confirmNewPassword: yup
		.string()
		.oneOf([yup.ref('newPassword'), null], 'Passwords must match')
		.required('Confirm New Password is required'),
});

export const changePasswordSchema = yup.object().shape({
	currentPassword: yup.string().required('Current Password is required'),
	newPassword: yup
		.string()
		.required('New Password is required')
		.min(6, 'New Password must be at least 6 characters long'),
	confirmNewPassword: yup
		.string()
		.oneOf([yup.ref('newPassword'), null], 'Passwords must match')
		.required('Confirm New Password is required'),
});
