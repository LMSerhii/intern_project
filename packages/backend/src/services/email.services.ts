import { config } from '@/config';
import nodemailer from 'nodemailer';

const { mailName, mailPsw, backendUrl, frontendUrl } = config;

class EmailService {
	private transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: 'smtp.ukr.net',
			port: 2525,
			secure: true,
			auth: {
				user: mailName,
				pass: mailPsw,
			},
		});
	}

	async sendVerificationEmail(
		name: string,
		email: string,
		verificationToken: string,
	): Promise<void> {
		const mailOptions = {
			from: mailName,
			to: email,
			subject: 'Verify email',
			html: `<p>Hi ${name},</p>
        <p>Thanks for getting started with our Application</p>
        <p>
          We need a little more information to complete your registration, including a
          confirmation of your email address.
        </p>
        <p>Click below to confirm your email address:</p>
        <p><a
          target="_blank"
          href="${backendUrl}/api/users/verify/${verificationToken}"
          >Click verify email</a
        > 
        </p>
        <p>${backendUrl}/api/users/verify/${verificationToken}</p>`,
		};

		await this.transporter.sendMail(mailOptions);
	}

	async sendForgotTokenByEmail(
		email: string,
		verificationToken: string,
	): Promise<void> {
		const mailOptions = {
			from: mailName,
			to: email,
			subject: 'Reset password link',
			html: `<table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <tr>
          <td>
            <h2 style="text-align: center;">Application - Password Reset</h2>
            <p style="text-align: center;">Dear User,</p>
            <p style="text-align: center;">
            You have requested to reset your password on Application. To proceed with the password reset, please click the link below:</p>
            <p style="text-align: center;">
            <a href="${frontendUrl}/reset-password-form/${verificationToken}" 
            style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none;">
          Reset Password</a></p>
            <p style="text-align: center;">If you did not request this password reset, you can safely ignore this email.</p>
            <p style="text-align: center;">Best Regards,<br>Our Team</p>
          </td>
        </tr>
      </table>`,
		};

		await this.transporter.sendMail(mailOptions);
	}
}

export const emailService = new EmailService();
