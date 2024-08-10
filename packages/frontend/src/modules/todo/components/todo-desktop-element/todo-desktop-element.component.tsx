import React, { useState } from 'react';

import { ITodo } from '../todo-element/todo-element.component';
import GridItemComponent from '~shared/components/grit-item/grid-item.component';
import TextComponent, {
	TextAlign,
} from '~shared/components/text/text.component';
import Button from '~shared/components/button/button.component';
import { FaArrowUpRightFromSquare, FaTrashCan } from 'react-icons/fa6';
import CheckboxComponent from '~shared/components/checkbox/checkbox.component';
import { ROUTER_KEYS } from '~shared/keys';
import { useNavigate } from 'react-router-dom';
import { useTodoStore } from '~store/todo.store';
import { Modal } from '~shared/components/Modal/modal.component';
import {
	btnWrapper,
	cellStyle,
	deleteButton,
	editButton,
	extraBtn,
	modalText,
} from './todo-desktop-element.styles';

export interface TodoDesktopElementComponentProps {
	todo: ITodo;
	index?: number;
}

export default function TodoDesktopElementComponent({
	todo,
	index,
}: TodoDesktopElementComponentProps): React.ReactElement {
	const navigate = useNavigate();
	const { removeTodo, updateTodoDone } = useTodoStore();
	const [isShow, setIsShow] = useState(false);

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
	return (
		<React.Fragment key={todo.id}>
			<GridItemComponent extraButtonStyles={cellStyle}>
				<TextComponent>
					{todo.title.length > 20
						? `${todo.title.slice(0, 20)}...`
						: todo.title}
				</TextComponent>
			</GridItemComponent>
			<GridItemComponent extraButtonStyles={cellStyle}>
				<TextComponent textAlign={TextAlign.left}>
					{todo.description.length > 150
						? `${todo.description.slice(0, 150)}...`
						: todo.description}
				</TextComponent>
			</GridItemComponent>
			<GridItemComponent extraButtonStyles={cellStyle}>
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
					/>

					<CheckboxComponent
						isDone={todo.done}
						setIsDone={(value) => updateTodoDone(todo.id, value)}
					>
						Done
					</CheckboxComponent>
				</div>
			</GridItemComponent>
			<Modal active={isShow} setActive={setIsShow}>
				<TextComponent extraTextStyles={modalText}>
					Are you sure?{' '}
					<Button
						text="yes"
						extraButtonStyles={extraBtn}
						onClick={() => removeTodo(todo.id)}
					/>
				</TextComponent>
			</Modal>
		</React.Fragment>
	);
}
