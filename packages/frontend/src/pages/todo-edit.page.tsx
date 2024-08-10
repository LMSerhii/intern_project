import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoFormComponent from '~modules/todo/components/todo-form/todo-form.component';
import ContainerComponent from '~shared/components/container/container.component';
import SectionComponent from '~shared/components/section/section.component';
import { useTodoStore } from '~store/todo.store';
import { ITodo } from '~modules/todo/components/todo-element/todo-element.component';
import { findTodo } from '~shared/helpers/todo.helpers';
import TextComponent, {
	TextAlign,
} from '~shared/components/text/text.component';
import BackBtnComponent from '~shared/components/back-btn/back-btn.component';
import LoaderComponent from '~shared/components/loader/loader.component';

export interface TodoEditPageProps {}

export default function TodoEditPage({}: TodoEditPageProps): React.ReactElement {
	const location = useLocation();
	const navigate = useNavigate();
	const { isLoading, isError, todos, fetchAccessTodos, editTodo } =
		useTodoStore();

	const queryParams = new URLSearchParams(location.search);

	const id = queryParams.get('id');

	const number = queryParams.get('number');

	const [todo, setTodo] = useState<ITodo | null>(null);

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

	return (
		<>
			<ContainerComponent>
				<SectionComponent>
					{isLoading && <LoaderComponent />}
					{isError && 'Something went wrong'}
					{!isLoading && !isError && todo && (
						<>
							<TextComponent textAlign={TextAlign.left}>
								TODO # {number}
							</TextComponent>
							<TodoFormComponent
								status="Edit"
								todo={todo}
								id={parseInt(id)}
								editTodo={editTodo}
							/>
						</>
					)}
					<BackBtnComponent handleBack={handleBack} />
				</SectionComponent>
			</ContainerComponent>
		</>
	);
}
