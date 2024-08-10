import React from 'react';
import { container } from './container.styles';

export interface ContainerComponentProps {
	children: React.ReactNode;
}

export default function ContainerComponent({
	children,
}: ContainerComponentProps): React.ReactElement {
	return <div className={container}>{children}</div>;
}
