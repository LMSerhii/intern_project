import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import TodoModule from '~modules/todo/todo.module';
import ContainerComponent from '~shared/components/container/container.component';
import SectionComponent from '~shared/components/section/section.component';
import { useTodoStore } from '~store/todo.store';

export interface HomePageProps {}

export default function HomePage({}: HomePageProps): React.ReactElement {
	const { todos, fetchPublicTodos } = useTodoStore();

	useEffect(() => {
		fetchPublicTodos();
	}, [fetchPublicTodos]);

	return (
		<>
			<Helmet>My Todos</Helmet>
			<ContainerComponent>
				<SectionComponent>
					<TodoModule todos={todos} />
				</SectionComponent>
			</ContainerComponent>
		</>
	);
}
