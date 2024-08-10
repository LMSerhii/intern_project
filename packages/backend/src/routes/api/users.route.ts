import userController from '@/controllers/user.controller';
import AuthMiddleware from '@/middlewares/auth.middleware';
import {
	emailUserSchema,
	loginUserSchema,
	passwordChangeSchema,
	passwordUserSchema,
	registerUserSchema,
} from '@/schemas/user.schema';
import catchAsync from '@/utils/catch-async.util';
import validateBody from '@/utils/validate-body.util';
import { Router } from 'express';

const usersRouter: Router = Router();
const authMiddleware = new AuthMiddleware();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public

usersRouter.post(
	'/register',
	validateBody(registerUserSchema),
	catchAsync(userController.register.bind(userController)),
);
usersRouter.post(
	'/login',
	validateBody(loginUserSchema),
	catchAsync(userController.login.bind(userController)),
);

usersRouter.post(
	'/logout',
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(userController.logout.bind(userController)),
);

usersRouter.get(
	'/current',
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(userController.current.bind(userController)),
);

usersRouter.get(
	'/verify/:verificationToken',
	catchAsync(userController.verifyByEmail.bind(userController)),
);

usersRouter.post(
	'/change-password',
	validateBody(passwordChangeSchema),
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(userController.changePassword.bind(userController)),
);

usersRouter.post(
	'/forgot-password',
	validateBody(emailUserSchema),
	catchAsync(userController.resetToken.bind(userController)),
);

usersRouter.post(
	'/reset-password',
	validateBody(passwordUserSchema),
	catchAsync(userController.resetPassword.bind(userController)),
);

export default usersRouter;
