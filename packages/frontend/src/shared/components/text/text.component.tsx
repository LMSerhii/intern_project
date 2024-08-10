import classNames from 'classnames';
import React from 'react';
import { createTextStyle } from './text.styles';

export enum TextAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

export interface TextComponentProps {
	children: React.ReactNode;
	textAlign?: TextAlign;
	extraTextStyles?: string;
}

export default function TextComponent({
	children,
	textAlign = TextAlign.center,
	extraTextStyles,
}: TextComponentProps): React.ReactElement {
	return (
		<p className={classNames(createTextStyle(textAlign), extraTextStyles)}>
			{children}
		</p>
	);
}
