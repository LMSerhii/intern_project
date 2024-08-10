import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const panelWrapper = css`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2px;
	padding: 20px 0;

	@media (max-width: 425px) {
		flex-direction: column;
		gap: 5px;
	}

	@media (min-width: 426px) and (max-width: 768px) {
		flex-direction: row;
		gap: 10px;
	}

	@media (min-width: 769px) {
		flex-direction: row;
		gap: 20px;
	}
`;

export const button = css`
	border: none !important;
	padding: 10px 20px !important;
	background-color: ${colors.CaribbeanGreen} !important;
	transition: background-color 250ms ease-in !important;

	&:hover,
	&:focus {
		background-color: ${colors.Radioactive} !important;
	}

	@media (max-width: 425px) {
		font-size: ${fonts.small} !important;
		padding: 8px 16px !important;
	}

	@media (min-width: 426px) and (max-width: 768px) {
		font-size: ${fonts.medium} !important;
		padding: 10px 20px !important;
	}

	@media (min-width: 769px) {
		font-size: ${fonts.large} !important;
		padding: 12px 24px !important;
	}
`;
