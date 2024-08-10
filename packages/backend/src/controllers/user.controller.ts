import { emailService } from '@/services/email.services';
import UserService from '@/services/user.service';
import { User } from '@prisma/client';
import { Request, Response } from 'express';

export class UserController {
	constructor(private userService: UserService) {}

	async register(req: Request, res: Response): Promise<void> {
		const data = req.body;

		const newUser = await this.userService.register(data);

		res.status(201).send(newUser);
	}

	async login(req: Request, res: Response): Promise<void> {
		const { email, password } = req.body;

		const user = await this.userService.login(email, password);

		res.send(user);
	}

	async logout(req: Request, res: Response): Promise<void> {
		const user = req.user as User;

		await this.userService.logout(user.id);

		res.sendStatus(204);
	}

	async current(req: Request, res: Response): Promise<void> {
		const { email, username } = req.user as User;

		const currentUser = { email, username };

		res.send(currentUser);
	}

	async changePassword(req: Request, res: Response): Promise<void> {
		const { oldPassword, newPassword } = req.body;
		const user = req.user as User;

		await this.userService.changePassword(user, oldPassword, newPassword);

		res.send('Password changed successfully');
	}

	async verifyByEmail(req: Request, res: Response): Promise<void> {
		const { verificationToken } = req.params;

		await this.userService.verifyByVerificationToken(verificationToken);

		res.send('successfully verified');
	}

	async resetToken(req: Request, res: Response): Promise<void> {
		const { email } = req.body;

		const user = await this.userService.findUserByEmail(email);

		if (!user) {
			res.send('Password reset instructions sent by email');
		}

		const otp = await this.userService.resetToken(email);

		await emailService.sendForgotTokenByEmail(email, otp);

		res.send('Password reset instructions sent by email');
	}

	async resetPassword(req: Request, res: Response): Promise<void> {
		const { password, otp } = req.body;

		await this.userService.createPassword(otp, password);

		res.send('Password has been updated');
	}
}

const userController = new UserController(new UserService());
export default userController;
