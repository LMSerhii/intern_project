import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';
import BackBtnComponent from '~shared/components/back-btn/back-btn.component';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export interface NotFoundPageProps {}

export default function NotFoundPage({}: NotFoundPageProps): React.ReactElement {
	const navigate = useNavigate();
	return (
		<>
			<Helmet>
				<title>Page Not Found</title>
			</Helmet>
			<div className={containerStyle}>
				<h1 className={headingStyle}>404</h1>
				<p className={messageStyle}>Page Not Found</p>
				<BackBtnComponent handleBack={() => navigate(-1)} />
			</div>
		</>
	);
}

const containerStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
	background-color: ${colors.Croatia};
	color: ${colors.Filipia};
`;

const headingStyle = css`
	font-size: ${fonts.extraMegaBigLarge};
	margin-bottom: 1rem;
`;

const messageStyle = css`
	font-size: ${fonts.extraExtraLarge};
	margin-bottom: 2rem;
`;
