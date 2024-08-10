import React from 'react';
import { useParams } from 'react-router-dom';
import ResetPasswordComponent from '~modules/auth/components/reset-password-form/reset-password.component';
import { useAuthStore } from '~store/user.store';

export interface ResetPasswordPageProps {}

export interface FormResetData {
	newPassword: string;
	confirmNewPassword: string;
}

export default function ResetPasswordPage({}: ResetPasswordPageProps): React.ReactElement {
	const params = useParams();
	const { resetPassword } = useAuthStore();

	const handleReset = async (data: FormResetData): Promise<void> => {
		await resetPassword(data.newPassword, params.otp);
	};

	return (
		<>
			<ResetPasswordComponent onSubmit={handleReset} />
		</>
	);
}
