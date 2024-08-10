import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const form = css`
	margin: 0 auto;
	position: relative;
	margin-bottom: 40px;
`;

export const input = css`
	width: 100%;
	height: 56px;

	border-style: none;
	border-bottom: 1px solid ${colors.RaisinBlack};
	background-color: transparent;

	padding: 16px;
	padding-right: 40px;
	outline: none;

	transition: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

	font-size: ${fonts.medium};
	color: ${colors.RaisinBlack};
	font-weight: 300;
	letter-spacing: 0.03em;

	&::placeholder {
		font-weight: 200;
	}
`;

export const button = css`
	display: block;
	padding: 10px 20px;
	font-size: ${fonts.medium};
	font-weight: bold;
	color: ${colors.white};
	background-color: rgb(31, 111, 151);
	margin: 0 auto;
	margin-top: 20px;
	border-radius: 8px;
	border: none;
`;
