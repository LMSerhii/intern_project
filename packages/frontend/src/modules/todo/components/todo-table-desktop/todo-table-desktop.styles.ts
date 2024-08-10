import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const containerStyle = css`
	width: 100%;
	margin: 0 auto;
`;

export const gridTableStyle = css`
	display: grid !important;
	grid-template-columns: 1fr 3fr 2fr !important;
	gap: 10px !important;
`;

export const headerStyle = css`
	font-size: ${fonts.extraBigLarge} !important;
	text-align: center !important;
	font-weight: bold !important;
	background-color: ${colors.AmericanSilver} !important;
`;

export const cellStyle = css`
	font-size: 20px;
	padding: 20px;
	background-color: ${colors.AntiFlashWhite};
	border: 1px solid ${colors.Cull};
`;
