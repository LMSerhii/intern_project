import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthStore } from '~store/user.store';
import BackBtnComponent from '~shared/components/back-btn/back-btn.component';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

import { forgotPasswordSchema } from '~shared/schemas/from-schemas';
import FormComonent from '~shared/components/form/form.comonent';
import InputComponent from '~shared/components/input/input.component';

export interface ForgotPasswordFormComponentProps {}

export default function ForgotPasswordFormComponent({}: ForgotPasswordFormComponentProps): React.ReactElement {
	const { forgotPassword } = useAuthStore();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm({
		resolver: yupResolver(forgotPasswordSchema),
	});
	const onSubmit = async (): Promise<void> => {
		const data = getValues();
		await forgotPassword(data.email);
		navigate(`${ROUTER_KEYS.LOGIN}`);
	};

	return (
		<>
			<FormComonent onSubmit={handleSubmit(onSubmit)}>
				<InputComponent
					type={'email'}
					placeholder={'Email'}
					register={register('email')}
					error={errors.email}
				/>
			</FormComonent>
			<BackBtnComponent handleBack={() => navigate(-1)} />
		</>
	);
}
