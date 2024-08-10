import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoFormComponent from '~modules/todo/components/todo-form/todo-form.component';
import BackBtnComponent from '~shared/components/back-btn/back-btn.component';
import ContainerComponent from '~shared/components/container/container.component';
import LoaderComponent from '~shared/components/loader/loader.component';
import SectionComponent from '~shared/components/section/section.component';
import TextComponent, {
	TextAlign,
} from '~shared/components/text/text.component';
import { useTodoStore } from '~store/todo.store';

export interface TodoAddPageProps {}

export default function TodoAddPage({}: TodoAddPageProps): React.ReactElement {
	const navigate = useNavigate();

	const { isLoading, isError, todos, fetchAccessTodos, addTodo } =
		useTodoStore();

	useEffect(() => {
		fetchAccessTodos();
	}, [fetchAccessTodos]);

	const handleBack = (): void => {
		navigate(-1);
	};

	return (
		<>
			<ContainerComponent>
				<SectionComponent>
					{isLoading && <LoaderComponent />}
					{isError && 'Something went wrong'}
					{!isLoading && !isError && (
						<>
							<TextComponent textAlign={TextAlign.left}>
								TODO # {todos.length + 1}
							</TextComponent>
							<TodoFormComponent status="Add" addTodo={addTodo} />
						</>
					)}
					<BackBtnComponent handleBack={handleBack} />
				</SectionComponent>
			</ContainerComponent>
		</>
	);
}
