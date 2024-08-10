import React from 'react';
import { loader } from './loader.styles';
import { ColorRing } from 'react-loader-spinner';
import { colors } from '~shared/styles';

export interface LoaderComponentProps {
	spinner?: React.ReactNode;
}

export default function LoaderComponent({
	spinner,
}: LoaderComponentProps): React.ReactElement {
	return (
		<div className={loader}>
			{spinner ? (
				spinner
			) : (
				<ColorRing
					visible={true}
					height="40"
					width="40"
					ariaLabel="color-ring-loading"
					wrapperStyle={{}}
					wrapperClass="color-ring-wrapper"
					colors={[
						`${colors.LightCarminePink}`,
						`${colors.CoralReef}`,
						`${colors.Rajah}`,
						`${colors.Sage}`,
						`${colors.DolphinGray}`,
					]}
				/>
			)}
		</div>
	);
}
