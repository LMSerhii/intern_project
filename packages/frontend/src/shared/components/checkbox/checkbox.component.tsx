import React from 'react';
import { realCheckbox, checkboxWrapper } from './checkbox.styles';

export interface CheckboxComponentProps {
	isDone: boolean;
	setIsDone: (value: boolean) => void;
	children?: React.ReactNode;
	disabled?: boolean;
}

export default function CheckboxComponent({
	isDone,
	setIsDone,
	children,
	disabled,
}: CheckboxComponentProps): React.ReactElement {
	const isDisabled = Boolean(disabled);

	const handleChange = (): void => {
		if (isDisabled) {
			return;
		}

		setIsDone(!isDone);
	};

	return (
		<label className={checkboxWrapper}>
			<input
				className={realCheckbox}
				type="checkbox"
				name="done"
				checked={isDone}
				onChange={handleChange}
			/>
			{children}
		</label>
	);
}
