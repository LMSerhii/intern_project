import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const formStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color: ${colors.Cultured};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const inputStyle = css`
	padding: 10px;
	border: 1px solid ${colors.Cull};
	border-radius: 4px;
	font-size: ${fonts.medium};
	flex: 1;
	margin-right: 10px;
	transition: border-color 0.3s;

	&:focus {
		border-color: ${colors.ElectricIndigo};
		outline: none;
	}

	@media (max-width: 424px) {
		width: 100%;
		font-size: ${fonts.small};
	}

	@media (min-width: 425px) and (max-width: 768px) {
		width: 80%;
		font-size: ${fonts.medium};
	}

	@media (min-width: 769px) {
		width: 60%;
		font-size: ${fonts.large};
	}
`;

export const buttonStyle = css`
	padding: 10px 16px;
	background-color: ${colors.ElectricIndigo};
	border: none;
	border-radius: 4px;
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${colors.InterdimensionalBlue};
	}

	&:focus {
		outline: none;
	}

	&:active {
		background-color: ${colors.InterdimensionalBlue};
	}
`;

export const iconStyle = css`
	font-size: ${fonts.medium};
`;
