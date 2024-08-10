import React from 'react';
import { fabStyle } from './float-button.tyles';

export interface FloatButtonComponentProps {
	onClick: () => void;
	icon: React.ReactNode;
}

export default function FloatButtonComponent({
	onClick,
	icon,
}: FloatButtonComponentProps): React.ReactElement {
	return (
		<button onClick={onClick} className={fabStyle}>
			{icon}
		</button>
	);
}
