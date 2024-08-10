// RegistrationForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormRegisterData } from '~modules/auth/register.module';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '~shared/schemas/from-schemas';
import FormComonent from '~shared/components/form/form.comonent';
import InputComponent from '~shared/components/input/input.component';

export interface RegistrationFormComponentProps {
	onFormSubmit: (data: FormRegisterData) => void;
}

export default function RegistrationFormComponent({
	onFormSubmit,
}: RegistrationFormComponentProps): React.ReactElement {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ resolver: yupResolver(registrationSchema) });

	return (
		<>
			<FormComonent onSubmit={handleSubmit(onFormSubmit)}>
				<InputComponent
					type={'username'}
					placeholder={'Name'}
					register={register('username')}
					error={errors.username}
				/>

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

				<InputComponent
					type={'password'}
					placeholder={'Password'}
					register={register('confirmPassword', {
						required: true,
						validate: (value) => value === watch('password'),
					})}
					error={errors.confirmPassword}
				/>
			</FormComonent>
		</>
	);
}
