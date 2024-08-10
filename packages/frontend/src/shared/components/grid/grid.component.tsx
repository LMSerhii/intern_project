import React from 'react';
import { grid } from './grid.styles';
import classNames from 'classnames';

export interface GridComponentProps {
	children: React.ReactNode;
	extraButtonStyles?: string;
}

export default function GridComponent({
	children,
	extraButtonStyles,
}: GridComponentProps): React.ReactElement {
	return <ul className={classNames(grid, extraButtonStyles)}>{children}</ul>;
}
