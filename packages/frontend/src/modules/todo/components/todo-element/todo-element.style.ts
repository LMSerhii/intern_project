import { css } from '@emotion/css';
import { colors } from '../../../../shared/styles/colors';
import { fonts } from '~shared/styles/fonts';

export const box = css`
	display: flex;
	flex-direction: column;

	padding: 20px;
	background-color: ${colors.WarmWhite};
	border-radius: 8px;

	color: ${colors.SonicSilver};
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	position: relative;
	width: 100%;
	height: 100%;
`;

export const btnWrapper = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
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

export const title = css`
	color: ${colors.Luma};
	font-size: ${fonts.large};
`;

export const desc = css`
	color: ${colors.Desaturated};
`;

export const modalText = css`
	font-size: ${fonts.extraLarge};
`;

export const extraBtn = css`
	margin-top: 20px;
	background-color: ${colors.ElectricIndigo} !important;
`;

export const content = css`
	flex: 1;
`;

export const trimmed = css`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const trimmedDescription = css`
	${trimmed}
	width: 250px;

	@media (max-width: 375px) {
		width: 200px;
	}
`;

export const trimmedTitle = css`
	${trimmed}
	width: 100px;
`;
