import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const fabStyle = css`
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: 56px;
	height: 56px;
	background-color: ${colors.ElectricIndigo};
	color: white;
	border: none;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	transition: background-color 0.3s;
	z-index: 999;

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
