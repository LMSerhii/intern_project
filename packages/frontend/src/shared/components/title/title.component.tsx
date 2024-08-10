import React from 'react';

export enum Variant {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

export interface TitleComponentProps {
	title: string;
	size?: Variant;
}

export default function TitleComponent({
	title,
	size = Variant.large,
}: TitleComponentProps): React.JSX.Element {
	return (
		<>
			{size === Variant.large && <h1>{title}</h1>}
			{size === Variant.medium && <h2>{title}</h2>}
			{size === Variant.small && <h3>{title}</h3>}
		</>
	);
}
