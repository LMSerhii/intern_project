import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import LoginModule from '~modules/auth/login.module';
import BackBtnComponent from '~shared/components/back-btn/back-btn.component';

export interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps): React.ReactElement {
	const navigate = useNavigate();
	return (
		<>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<LoginModule />
			<BackBtnComponent handleBack={() => navigate(-1)} />
		</>
	);
}
