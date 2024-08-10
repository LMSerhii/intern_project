import React from 'react';
import { section } from './section.styles';

export interface SectionComponentProps {
	children: React.ReactNode;
}

export default function SectionComponent({
	children,
}: SectionComponentProps): React.ReactElement {
	return <section className={section}>{children}</section>;
}
