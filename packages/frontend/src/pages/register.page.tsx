import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import RegisterModule from '~modules/auth/register.module';
import BackBtnComponent from '~shared/components/back-btn/back-btn.component';

export default function RegisterPage(): React.ReactElement {
	const navigate = useNavigate();

	return (
		<>
			<Helmet>
				<title>Registration</title>
			</Helmet>
			<RegisterModule />
			<BackBtnComponent handleBack={() => navigate(-1)} />
		</>
	);
}
