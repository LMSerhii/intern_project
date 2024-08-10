import { css } from '@emotion/css';

export const container = css`
	padding: 0 20px;
	margin: 0 auto;

	@media (min-width: 768px) and (max-width: 1439px) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 85vh;
	}
`;
