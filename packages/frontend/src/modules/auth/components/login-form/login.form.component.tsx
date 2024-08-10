// LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormLoginData } from '~modules/auth/login.module';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { loginSchema } from '~shared/schemas/from-schemas';
import FormComonent from '~shared/components/form/form.comonent';
import InputComponent from '~shared/components/input/input.component';

export interface LoginFromComponentProps {
	onFormSubmit: (data: FormLoginData) => void;
}

export default function LoginFormComponent({
	onFormSubmit,
}: LoginFromComponentProps): React.ReactElement {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema) });

	return (
		<>
			<FormComonent onSubmit={handleSubmit(onFormSubmit)}>
				<InputComponent
					type={'email'}
					placeholder={'Email'}
					register={register('email')}
					error={errors.email}
				/>

				<InputComponent
					type={'password'}
					placeholder={'Password'}
					register={register('password')}
					error={errors.password}
				/>
				<Link to={ROUTER_KEYS.FORGOT_PASSWORD}>
					Forgot your password ?
				</Link>
			</FormComonent>
		</>
	);
}
