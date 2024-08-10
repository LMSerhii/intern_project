import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const formStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 300px;
	margin: auto;
`;

export const buttonStyle = css`
	padding: 0.5rem !important;
	border: none !important;
	border-radius: 4px !important;
	background-color: ${colors.Azure} !important;
	color: white !important;
	cursor: pointer !important;

	&:hover {
		background-color: ${colors.Crayola} !important;
	}
`;
