import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const inputStyle = css`
	padding: 0.5rem;
	border: 1px solid ${colors.Cull};
	border-radius: 4px;
`;

export const errorStyle = css`
	color: ${colors.Cardinal};
	font-size: 0.875rem;
`;
