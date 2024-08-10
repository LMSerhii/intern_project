import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoDetailComponents from '~modules/todo/components/todo-detail/todo-detail.components';
import { ITodo } from '~modules/todo/components/todo-element/todo-element.component';
import ContainerComponent from '~shared/components/container/container.component';
import SectionComponent from '~shared/components/section/section.component';
import { findTodo } from '~shared/helpers/todo.helpers';
import { useTodoStore } from '~store/todo.store';
import FloatingActionButton from '~shared/components/float-button/float-button-component';
import { ROUTER_KEYS } from '~shared/keys';
import BackBtnComponent from '~shared/components/back-btn/back-btn.component';
import LoaderComponent from '~shared/components/loader/loader.component';
import { ColorRing } from 'react-loader-spinner';

export interface TodoDetailsPageProps {}

export default function TodoDetailsPage({}: TodoDetailsPageProps): React.ReactElement {
	const location = useLocation();
	const navigate = useNavigate();
	const { isLoading, isError, todos, fetchAccessTodos } = useTodoStore();

	const [todo, setTodo] = useState<ITodo | null>(null);

	const queryParams = new URLSearchParams(location.search);

	const id = queryParams.get('id');

	const number = queryParams.get('number');

	useEffect(() => {
		fetchAccessTodos();
	}, [fetchAccessTodos]);

	useEffect(() => {
		if (todos.length > 0) {
			setTodo(findTodo(todos, parseInt(id)));
		}
	}, [todos, id]);

	const handleBack = (): void => {
		navigate(-1);
	};

	const handleFabClick = (): void => {
		navigate(
			`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.TODO}${ROUTER_KEYS.ADD_TODO}`,
		);
	};

	return (
		<>
			<ContainerComponent>
				<SectionComponent>
					{isLoading && (
						<LoaderComponent
							spinner={
								<ColorRing
									visible={true}
									height="40"
									width="40"
									ariaLabel="color-ring-loading"
									wrapperStyle={{}}
									wrapperClass="color-ring-wrapper"
									colors={[
										'#e15b64',
										'#f47e60',
										'#f8b26a',
										'#abbd81',
										'#849b87',
									]}
								/>
							}
						/>
					)}
					{isError && 'Something went wrong'}
					{!isLoading && !isError && todo && (
						<TodoDetailComponents
							todo={todo}
							number={parseInt(number)}
						/>
					)}
					<BackBtnComponent handleBack={handleBack} />
				</SectionComponent>
			</ContainerComponent>
			<FloatingActionButton onClick={handleFabClick} icon={<FaPlus />} />
		</>
	);
}
