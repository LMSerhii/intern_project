import React from 'react';
import { modalStyle, modalContentStyle } from './modal.styles';

export interface ModalProps {
	active: boolean;
	setActive: (active: boolean) => void;
	children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
	active,
	setActive,
	children,
}) => {
	return (
		<div
			className={active ? `${modalStyle} active` : modalStyle}
			onClick={() => setActive(false)}
		>
			<div
				className={
					active ? `${modalContentStyle} active` : modalContentStyle
				}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};
