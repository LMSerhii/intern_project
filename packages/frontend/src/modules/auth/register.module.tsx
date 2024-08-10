import React from 'react';
import RegistrationFormComponent from './components/registration-form/register-from.component';
import { useAuthStore } from '~store/user.store';

export interface RegisterModuleProps {}

export interface FormRegisterData {
	username?: string;
	email: string;
	password: string;
}

export default function RegisterModule({}: RegisterModuleProps): React.ReactElement {
	const { register } = useAuthStore();

	const handleFormSubmit = async (data: FormRegisterData): Promise<void> => {
		await register(data.email, data.password);
	};
	return (
		<>
			<RegistrationFormComponent onFormSubmit={handleFormSubmit} />
		</>
	);
}
