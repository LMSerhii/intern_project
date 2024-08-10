import React from 'react';
import TextComponent, {
	TextAlign,
} from '~shared/components/text/text.component';
import { useTodoStore } from '~store/todo.store';
import {
	box,
	btnWrapper,
	deleteButton,
	desc,
	editButton,
	subWrapBtn,
	subWrapCheck,
	textTitle,
} from './todo-detail.styles';
import CheckboxComponent from '~shared/components/checkbox/checkbox.component';
import { FaTrashCan } from 'react-icons/fa6';
import { CiEdit } from 'react-icons/ci';
import { ITodo } from '../todo-element/todo-element.component';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import Button from '~shared/components/button/button.component';

export interface TodoDetailComponentsProps {
	todo: ITodo;
	number: number;
	statusEdit?: boolean;
	formData?: { title: string; description?: string };
}

export default function TodoDetailComponents({
	todo,
	number,
}: TodoDetailComponentsProps): React.ReactElement {
	const navigate = useNavigate();
	const { removeTodo, updateTodoDone, updateTodoPrivate } = useTodoStore();

	const handleDelete = (): void => {
		removeTodo(todo.id);
	};

	const handleEdit = (): void => {
		const params = new URLSearchParams({
			id: todo.id.toString(),
			number: number.toString(),
		});

		navigate(
			`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.TODO}${ROUTER_KEYS.EDIT_TODO}?${params.toString()}`,
		);
	};

	return (
		<>
			<div className={box}>
				<TextComponent textAlign={TextAlign.left}>
					TODO # {number}
				</TextComponent>
				<TextComponent
					textAlign={TextAlign.left}
					extraTextStyles={textTitle}
				>
					{todo.title}
				</TextComponent>
				<TextComponent
					textAlign={TextAlign.left}
					extraTextStyles={desc}
				>
					{todo.description}
				</TextComponent>

				<div className={btnWrapper}>
					<div className={subWrapBtn}>
						<Button
							text=""
							icon={<CiEdit fill="white" size={16} />}
							extraButtonStyles={editButton}
							onClick={handleEdit}
						/>
						<Button
							text=""
							icon={<FaTrashCan fill="white" size={16} />}
							extraButtonStyles={deleteButton}
							onClick={handleDelete}
						/>
					</div>

					<div className={subWrapCheck}>
						<CheckboxComponent
							isDone={todo.done}
							setIsDone={(value) =>
								updateTodoDone(todo.id, value)
							}
						>
							Done
						</CheckboxComponent>

						<CheckboxComponent
							isDone={todo.private}
							setIsDone={(value) =>
								updateTodoPrivate(todo.id, value)
							}
						>
							Private
						</CheckboxComponent>
					</div>
				</div>
			</div>
		</>
	);
}
