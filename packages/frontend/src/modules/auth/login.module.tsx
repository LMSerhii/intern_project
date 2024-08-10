import React from 'react';
import LoginFormComponent from './components/login-form/login.form.component';
import { useAuthStore } from '~store/user.store';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

export interface LoginModuleProps {}

export interface FormLoginData {
	email: string;
	password: string;
}

export default function LoginModule({}: LoginModuleProps): React.ReactElement {
	const { login } = useAuthStore();
	const navigate = useNavigate();

	const handleFormSubmit = async (data: FormLoginData): Promise<void> => {
		await login(data.email, data.password);
		navigate(`${ROUTER_KEYS.DASHBOARD}`);
	};
	return (
		<>
			<LoginFormComponent onFormSubmit={handleFormSubmit} />
		</>
	);
}
