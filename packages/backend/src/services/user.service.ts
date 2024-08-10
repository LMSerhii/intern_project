import HttpError from '@/utils/http-error.util';
import { PrismaClient, User } from '@prisma/client';
import { nanoid } from 'nanoid';
import bcrypt from 'bcryptjs';
import JwtService from './jwt.service';
import crypto from 'crypto';
import { emailService } from './email.services';

const prisma = new PrismaClient();

export default class UserService {
	private jwtService = new JwtService();

	async register(data: User): Promise<Pick<User, 'email' | 'username'>> {
		const user = await this.findUserByEmail(data.email);

		if (user) throw HttpError(409, 'User already exists');

		const hashedPassword = await this.createHashPassword(data.password);
		const verificationToken = this.createVerificationToken();

		const createData = {
			...data,
			username: data.username ? data.username : data.email.split('@')[0],
			password: hashedPassword,
			verificationToken,
		};

		const newUser = await prisma.user.create({
			data: createData,
			select: {
				email: true,
				username: true,
			},
		});

		await emailService.sendVerificationEmail(
			newUser.username || newUser.email.split('@')[0],
			newUser.email,
			verificationToken,
		);

		return newUser;
	}

	async login(
		email: string,
		password: string,
	): Promise<{
		user: Pick<User, 'email' | 'username' | 'isVerified'>;
		token: string;
		refreshToken: string;
	}> {
		const user = await this.findUserByEmail(email);

		if (!user) throw HttpError(404, 'User not found');

		if (!user.isVerified) throw HttpError(401, 'Account is not verified');

		const isMatch = await this.checkHashPassword(password, user.password);

		if (!isMatch) throw HttpError(401, 'Email or password is wrong');

		const { token, refreshToken } = await this.jwtService.generateTokens({
			payload: user.id.toString(),
		});

		await prisma.user.update({
			where: { id: user.id },
			data: { token, refreshToken },
		});

		return {
			user: {
				email: user.email,
				username: user.username ?? null,
				isVerified: user.isVerified,
			},
			token,
			refreshToken,
		};
	}

	async logout(id: number): Promise<void> {
		await prisma.user.update({
			where: { id },
			data: { token: '', refreshToken: '' },
		});
	}

	async current(
		id: number,
	): Promise<Pick<User, 'id' | 'email' | 'username'>> {
		const user = await prisma.user.findUnique({
			where: { id },
			select: {
				id: true,
				email: true,
				username: true,
			},
		});

		if (!user) throw HttpError(404, 'User not found');

		return user;
	}

	async verifyByVerificationToken(verificationToken: string): Promise<void> {
		const user = await prisma.user.findFirst({
			where: { verificationToken },
		});

		if (!user) throw HttpError(404, 'User not found');

		await prisma.user.update({
			where: { id: user.id },
			data: { isVerified: true, verificationToken: '' },
		});
	}

	async changePassword(
		user: User,
		oldPassword: string,
		newPassword: string,
	): Promise<void> {
		const isMatch = await this.checkHashPassword(
			oldPassword,
			user.password,
		);

		if (!isMatch) throw HttpError(401, 'Password is wrong');

		const hashedPassword = await this.createHashPassword(newPassword);

		await prisma.user.update({
			where: { id: user.id },
			data: { password: hashedPassword },
		});
	}

	async resetToken(email: string): Promise<string> {
		const resetToken = crypto.randomBytes(32).toString('hex');
		const resetTokenExp = Number(Date.now() + 10 * 60 * 1000);

		console.log('resetToken', resetToken);
		console.log('resetTokenExp', resetTokenExp);

		const user = await this.findUserByEmail(email);

		if (!user) throw HttpError(404, 'User not found');

		await prisma.user.update({
			where: { id: user.id },
			data: {
				passwordResetToken: resetToken,
				passwordResetTokenExp: resetTokenExp,
			},
		});

		return resetToken;
	}

	async createPassword(otp: string, newPassword: string): Promise<void> {
		const otpHash = crypto.createHash('sha256').update(otp).digest('hex');

		const user = await prisma.user.findFirst({
			where: {
				passwordResetToken: otpHash,
				passwordResetTokenExp: { gt: Date.now() },
			},
		});

		if (!user) throw HttpError(500, 'The token has expired');

		await prisma.user.update({
			where: { id: user.id },
			data: {
				password: newPassword,
			},
		});
	}

	async findUserByEmail(email: string): Promise<User | null> {
		const user = (await prisma.user.findFirst({
			where: { email },
		})) as User | null;
		return user;
	}

	async findUserById(id: number): Promise<User | null> {
		const user = (await prisma.user.findUnique({
			where: { id },
		})) as User | null;
		return user;
	}

	async createHashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	async checkHashPassword(
		password: string,
		userPassword: string,
	): Promise<boolean> {
		return await bcrypt.compare(password, userPassword);
	}

	createVerificationToken(): string {
		return nanoid();
	}
}
