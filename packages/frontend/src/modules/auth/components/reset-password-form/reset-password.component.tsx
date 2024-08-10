import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormResetData } from '~/pages/reset-password.page';

import InputComponent from '~shared/components/input/input.component';
import FormComonent from '~shared/components/form/form.comonent';
import { resetPasswordSchema } from '~shared/schemas/from-schemas';

export interface ResetPasswordComponentProps {
	onSubmit: (data: FormResetData) => void;
}

export default function ResetPasswordComponent({
	onSubmit,
}: ResetPasswordComponentProps): React.ReactElement {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(resetPasswordSchema),
	});

	return (
		<>
			<FormComonent
				onSubmit={handleSubmit(onSubmit)}
				submitButtonText={'Reset Password'}
			>
				<InputComponent
					type={'password'}
					placeholder={'New Password'}
					register={register('newPassword')}
					error={errors.newPassword}
				/>
				<InputComponent
					type={'password'}
					placeholder={'Confirm New Password'}
					register={register('confirmNewPassword')}
					error={errors.confirmNewPassword}
				/>
			</FormComonent>
		</>
	);
}
