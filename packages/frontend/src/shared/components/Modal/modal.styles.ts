import { css } from '@emotion/css';

export const modalStyle = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s ease-in-out;
	z-index: 999;

	&.active {
		opacity: 1;
		pointer-events: all;
	}
`;

export const modalContentStyle = css`
	padding: 20px;
	border-radius: 12px;
	background-color: white;
	width: 343px;
	transform: scale(0.5);
	transition: transform 0.4s ease-in-out;

	@media screen and (min-width: 768px) {
		width: 518px;
	}

	@media screen and (max-width: 350px) {
		width: 300px;
	}

	&.active {
		transform: scale(1);
	}
`;
