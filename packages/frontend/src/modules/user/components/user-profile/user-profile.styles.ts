import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const containerStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	background-color: ${colors.Croatia};
	border-radius: 8px;
	max-width: 400px;
	margin: auto;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const avatarStyle = css`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-bottom: 1rem;
	background-color: ${colors.Banderia};
`;

export const infoStyle = css`
	text-align: center;
`;

export const nameStyle = css`
	font-size: ${fonts.extraExtraLarge};
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

export const emailStyle = css`
	font-size: ${fonts.medium};
	color: ${colors.Chapi};
	margin-bottom: 1rem;
`;

export const buttonStyle = css`
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	background-color: ${colors.Azure};
	color: white;
	cursor: pointer;

	&:hover {
		background-color: ${colors.Crayola};
	}
`;

export const buttonWrapper = css`
	display: flex;
	align-items: center;
	gap: 10px;
`;
