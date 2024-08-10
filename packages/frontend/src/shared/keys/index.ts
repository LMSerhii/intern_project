export const enum ROUTER_KEYS {
	ALL_MATCH = '/*',
	ROOT = '/',
	LOGIN = '/login',
	REGISTER = '/register',
	DASHBOARD = '/dashboard',
	TODO = '/todo',
	ADD_TODO = '/add',
	EDIT_TODO = '/edit',
	MY_PROFILE = '/my-profile',
	FORGOT_PASSWORD = '/forgot-password',
	RESET_PASSWORD = '/reset-password-form/:otp',
}

export const STORAGE_KEYS = Object.freeze({
	TOKEN: 'TOKEN',
	USER: 'USER',
	AUTH: 'AUTH',
});
