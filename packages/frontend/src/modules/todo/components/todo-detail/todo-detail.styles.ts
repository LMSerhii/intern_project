import { css } from '@emotion/css';
import { colors } from '../../../../shared/styles/colors';
import { fonts } from '~shared/styles/fonts';

export const box = css`
	padding: 20px;
	background-color: ${colors.WarmWhite};
	border-radius: 8px;

	color: ${colors.SonicSilver};
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	position: relative;
	max-width: 100%;
	height: 100%;
`;

export const btnWrapper = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
	margin-top: 20px;
`;

export const subWrapBtn = css`
	display: flex;
	gap: 10px;
`;

export const subWrapCheck = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const button = css`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;

	width: 55px !important;
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

export const textTitle = css`
	color: ${colors.Luma};
	font-size: ${fonts.large};
`;

export const desc = css`
	color: ${colors.Desaturated};
`;
