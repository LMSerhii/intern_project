// FormComponent.tsx
import React from 'react';
import Button from '~shared/components/button/button.component';
import classNames from 'classnames';
import { buttonStyle, formStyle } from './form.styles';

export interface FormComponentProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onSubmit: (data: any) => void;
	extraClassName?: string;
	submitButtonText?: string;
	children: React.ReactNode;
}

export default function FormComonent({
	onSubmit,
	extraClassName = '',
	submitButtonText = 'Submit',
	children,
}: FormComponentProps): React.ReactElement {
	return (
		<form
			onSubmit={onSubmit}
			className={classNames(formStyle, extraClassName)}
		>
			{children}
			<Button text={submitButtonText} extraButtonStyles={buttonStyle} />
		</form>
	);
}
