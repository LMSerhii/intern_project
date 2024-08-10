// InputComponent.tsx
import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { errorStyle, inputStyle } from './input.styles';
import classNames from 'classnames';

export interface InputComponentProps {
	type: string;
	placeholder?: string;
	register: UseFormRegisterReturn;
	error?: FieldError | undefined;
	extraClassName?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
	type,
	placeholder,
	register,
	error,
	extraClassName = '',
}) => (
	<>
		<input
			type={type}
			{...register}
			placeholder={placeholder}
			className={classNames(inputStyle, extraClassName)}
		/>
		{error && <span className={errorStyle}>{error.message}</span>}
	</>
);

export default InputComponent;
