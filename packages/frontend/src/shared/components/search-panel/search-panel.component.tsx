import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import {
	buttonStyle,
	formStyle,
	iconStyle,
	inputStyle,
} from './search-panel.styles';

export interface SearchPanelComponentProps {
	onSearch: (query: string) => void;
}

export interface SearchFormInputs {
	query: string;
}

export default function SearchPanelComponent({
	onSearch,
}: SearchPanelComponentProps): React.ReactElement {
	const { register, handleSubmit, getValues } = useForm<SearchFormInputs>();
	const [query, setQuery] = useState('');

	useEffect(() => {
		const timerId = setTimeout(() => {
			onSearch(query);
		}, 500);

		return () => clearTimeout(timerId);
	}, [query, onSearch]);

	const onSubmit = (): void => {
		const data = getValues();
		return onSearch(data.query);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
			<input
				type="text"
				name="query"
				{...register('query')}
				placeholder="Search..."
				className={inputStyle}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button type="submit" className={buttonStyle}>
				<FaSearch className={iconStyle} />
			</button>
		</form>
	);
}
