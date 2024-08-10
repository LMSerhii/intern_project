import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthStore } from '~store/user.store';
import { changePasswordSchema } from '~shared/schemas/from-schemas';
import FormComonent from '~shared/components/form/form.comonent';
import InputComponent from '~shared/components/input/input.component';

export interface ChangePasswordComponentProps {}

export default function ChangePasswordComponent({}: ChangePasswordComponentProps): React.ReactElement {
	const { changePassword } = useAuthStore();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		getValues,
	} = useForm({
		resolver: yupResolver(changePasswordSchema),
	});

	const onChange = async (): Promise<void> => {
		const data = getValues();
		await changePassword(data.currentPassword, data.newPassword);
	};

	return (
		<>
			<FormComonent
				onSubmit={handleSubmit(onChange)}
				submitButtonText={'Change Password'}
			>
				<InputComponent
					type={'password'}
					placeholder={'Current Password'}
					register={register('currentPassword')}
					error={errors.currentPassword}
				/>

				<InputComponent
					type={'password'}
					placeholder={'New Password'}
					register={register('newPassword')}
					error={errors.newPassword}
				/>

				<InputComponent
					type={'password'}
					placeholder={'Confirm New Password'}
					register={register('confirmNewPassword', {
						required: true,
						validate: (value) => value === watch('newPassword'),
					})}
					error={errors.confirmNewPassword}
				/>
			</FormComonent>
		</>
	);
}
