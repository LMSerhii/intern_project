import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const headerStyle = css`
	background-color: ${colors.ElectricIndigo};
	padding: 20px;
	color: white;
	display: flex;
	justify-content: center;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
`;

export const navStyle = css`
	display: flex;
	gap: 20px;
`;

export const linkStyle = css`
	color: white;
	text-decoration: none;
	font-size: ${fonts.large};
	transition: color 0.3s;

	&:hover {
		color: ${colors.PaleViolet};
	}

	&:focus {
		outline: none;
		color: ${colors.PaleViolet};
	}

	&:active {
		color: ${colors.InterdimensionalBlue};
	}
`;
