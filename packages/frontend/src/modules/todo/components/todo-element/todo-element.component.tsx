import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrashCan } from 'react-icons/fa6';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {
	box,
	deleteButton,
	title,
	desc,
	btnWrapper,
	editButton,
	modalText,
	extraBtn,
	content,
	trimmedDescription,
	trimmedTitle,
} from './todo-element.style';

import TextComponent, {
	TextAlign,
} from '~shared/components/text/text.component';
import { useTodoStore } from '~store/todo.store';
import CheckboxComponent from '~shared/components/checkbox/checkbox.component';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

import Button from '~shared/components/button/button.component';
import { Modal } from '~shared/components/Modal/modal.component';
import classNames from 'classnames';
import { useAuth } from '~shared/hooks';

export interface ITodo {
	id?: number;
	title: string;
	description: string;
	done: boolean;
	private: boolean;
}

export interface TodoElementComponentProps {
	todo: ITodo;
	index?: number;
}

export default function TodoElementComponent({
	todo,
	index,
}: TodoElementComponentProps): React.ReactElement {
	const navigate = useNavigate();
	const { removeTodo, updateTodoDone } = useTodoStore();
	const [isShow, setIsShow] = useState(false);
	const { isLoggedIn } = useAuth();

	const handleDelete = (): void => {
		setIsShow(true);
	};

	const handleClick = (): void => {
		const params = new URLSearchParams({
			id: todo.id.toString(),
			number: (index + 1).toString(),
		});

		navigate(
			`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.TODO}?${params.toString()}`,
		);
	};

	const handleDeleteClick = (): void => {
		toast.promise(
			new Promise((resolve, reject) => {
				try {
					removeTodo(todo.id);
					resolve('Todo successfully removed!');
				} catch (error) {
					reject('Error removing todo');
				}
			}),
			{
				loading: 'Removing...',
				success: 'Todo successfully removed!',
				error: 'Error removing todo',
			},
		);
	};

	return (
		<>
			<div className={box}>
				<div className={content}>
					<TextComponent textAlign={TextAlign.left}>
						TODO # {index + 1}
					</TextComponent>
					<TextComponent
						textAlign={TextAlign.left}
						extraTextStyles={classNames(title, trimmedTitle)}
					>
						{todo.title}
					</TextComponent>
					<TextComponent
						textAlign={TextAlign.left}
						extraTextStyles={classNames(desc, trimmedDescription)}
					>
						{todo.description}
					</TextComponent>
				</div>

				<div className={btnWrapper}>
					<Button
						text=""
						icon={
							<FaArrowUpRightFromSquare fill="white" size={14} />
						}
						extraButtonStyles={editButton}
						onClick={handleClick}
					/>
					<Button
						text=""
						icon={<FaTrashCan fill="white" size={14} />}
						extraButtonStyles={deleteButton}
						onClick={handleDelete}
						disabled={!isLoggedIn && true}
					/>

					<CheckboxComponent
						isDone={todo.done}
						setIsDone={(value) => updateTodoDone(todo.id, value)}
						disabled={!isLoggedIn && true}
					>
						Done
					</CheckboxComponent>
				</div>
			</div>
			<Modal active={isShow} setActive={setIsShow}>
				<TextComponent extraTextStyles={modalText}>
					Are you sure?{' '}
					<Button
						text="yes"
						extraButtonStyles={extraBtn}
						onClick={handleDeleteClick}
					/>
				</TextComponent>
			</Modal>
		</>
	);
}
