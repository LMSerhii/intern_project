import React from 'react';
import { Status, useTodoStore } from '~store/todo.store';
import { button, panelWrapper } from './staus-panel.styles';
import Button from '~shared/components/button/button.component';

export interface StatusPanelComponentProps {}

export default function StatusPanelComponent({}: StatusPanelComponentProps): React.ReactElement {
	const { setStatusTodo } = useTodoStore();

	return (
		<div className={panelWrapper}>
			<Button
				text="All"
				extraButtonStyles={button}
				onClick={() => setStatusTodo(Status.All)}
			/>
			<Button
				text="Private"
				extraButtonStyles={button}
				onClick={() => setStatusTodo(Status.PRIVATE)}
			/>
			<Button
				text="Public"
				extraButtonStyles={button}
				onClick={() => setStatusTodo(Status.PUBLIC)}
			/>
			<Button
				text="Completed"
				extraButtonStyles={button}
				onClick={() => setStatusTodo(Status.COMPLETED)}
			/>
		</div>
	);
}
