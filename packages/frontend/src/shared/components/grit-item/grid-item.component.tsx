import React from 'react';

import { item } from './grid-item.styles';
import classNames from 'classnames';

export interface GridItemComponentProps {
	children: React.ReactNode;
	extraButtonStyles?: string;
}

export default function GridItemComponent({
	children,
	extraButtonStyles,
}: GridItemComponentProps): React.ReactElement {
	return <li className={classNames(item, extraButtonStyles)}>{children}</li>;
}
