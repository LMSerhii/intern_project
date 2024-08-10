import { css } from '@emotion/css';

export const swiperStyle = css`
	width: 100%;
	height: 100%;
	margin-top: 20px;
	margin-bottom: 20px;
	overflow: visible !important;
`;

export const slideStyle = css`
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	padding: 10px !important;
	height: 300px !important;
	transform: translateY(0) !important;
	transition:
		transform 0.3s ease,
		opacity 0.3s ease !important;
	opacity: 0.5 !important;

	&.swiper-slide-active {
		transform: translateY(-30px) !important;
		opacity: 1 !important;
	}
`;

export const customSwiperStyles = css`
	.swiper-pagination-fraction,
	.swiper-pagination-custom,
	.swiper-horizontal > .swiper-pagination-bullets,
	.swiper-pagination-bullets.swiper-pagination-horizontal {
		bottom: -70px !important;
	}
`;
