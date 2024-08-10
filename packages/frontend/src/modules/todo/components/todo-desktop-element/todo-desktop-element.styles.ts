import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const cellStyle = css`
	font-size: ${fonts.extraLarge};
	padding: 20px;
	background-color: ${colors.AntiFlashWhite};
	border: 1px solid #ccc;
`;

export const btnWrapper = css`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 5px;
	width: 100%;
`;

export const button = css`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;

	width: 50px !important;
	height: 25px !important;
	border: none !important;
	padding: 0 !important;

	border-radius: 8px !important;
`;

export const editButton = css`
	${button};
	background-color: ${colors.Azure} !important;
`;

export const deleteButton = css`
	${button};
	background-color: ${colors.Cardinal} !important;
`;

export const modalText = css`
	font-size: ${fonts.extraLarge};
`;

export const extraBtn = css`
	margin-top: 20px;
	background-color: ${colors.ElectricIndigo} !important;
`;
