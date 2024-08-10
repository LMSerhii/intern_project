import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const checkboxWrapper = css`
	display: inline;
	position: relative;
	margin: 8px 0;

	padding-left: 26px;
`;

export const realCheckbox = css`
	appearance: none;
	position: absolute;
	top: 2px;
	left: 0;
	margin: 0;
	width: 20px;
	height: 20px;
	border: 1.5px solid ${colors.CaribbeanGreen};
	border-radius: 3px;
	&:checked {
		background-color: ${colors.CaribbeanGreen};
	}
	&:checked::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 5px;
		width: 6px;
		height: 12px;
		border: 2px solid transparent;
		border-bottom-color: ${colors.white};
		border-right-color: ${colors.white};
		transform-origin: 50% 50%;
		transform: rotate(35deg);
	}
`;
