import React, { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import TodoModule from '~modules/todo/todo.module';
import ContainerComponent from '~shared/components/container/container.component';
import FloatingActionButton from '~shared/components/float-button/float-button-component';

import SectionComponent from '~shared/components/section/section.component';
import { ROUTER_KEYS } from '~shared/keys';
import { useTodoStore } from '~store/todo.store';

export interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps): React.ReactElement {
	const navigate = useNavigate();
	const { todos, fetchAccessTodos } = useTodoStore();

	useEffect(() => {
		fetchAccessTodos();
	}, [fetchAccessTodos]);

	const handleFabClick = (): void => {
		navigate(
			`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.TODO}${ROUTER_KEYS.ADD_TODO}`,
		);
	};

	return (
		<>
			<ContainerComponent>
				<SectionComponent>
					<TodoModule todos={todos} />
				</SectionComponent>
			</ContainerComponent>
			<FloatingActionButton onClick={handleFabClick} icon={<FaPlus />} />
		</>
	);
}
