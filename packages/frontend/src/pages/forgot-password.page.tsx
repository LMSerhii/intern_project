import React from 'react';
import ForgotPasswordFormComponent from '~modules/auth/components/forgot-password-from/forgot-password-form-component';

export interface ForgotPasswordPageProps {}

export default function ForgotPasswordPage({}: ForgotPasswordPageProps): React.ReactElement {
	return (
		<>
			<ForgotPasswordFormComponent />
		</>
	);
}
