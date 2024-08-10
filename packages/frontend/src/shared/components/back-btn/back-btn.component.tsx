import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { backButton } from './back-btn.styles';

export interface BackBtnComponentProps {
	handleBack: () => void;
}

export default function BackBtnComponent({
	handleBack,
}: BackBtnComponentProps): React.ReactElement {
	return (
		<button className={backButton} onClick={handleBack}>
			<FaLongArrowAltLeft />
			Back
		</button>
	);
}
