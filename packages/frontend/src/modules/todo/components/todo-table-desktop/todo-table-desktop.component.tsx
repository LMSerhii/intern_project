import React from 'react';
import classNames from 'classnames';
import GridComponent from '~shared/components/grid/grid.component';
import GridItemComponent from '~shared/components/grit-item/grid-item.component';
import { ITodo } from '../todo-element/todo-element.component';
import TextComponent from '~shared/components/text/text.component';

import TodoDesktopElementComponent from '../todo-desktop-element/todo-desktop-element.component';
import {
	cellStyle,
	containerStyle,
	gridTableStyle,
	headerStyle,
} from './todo-table-desktop.styles';

export interface TodoTableDesktopComponentProps {
	todos: ITodo[];
}

export default function TodoTableDesktopComponent({
	todos,
}: TodoTableDesktopComponentProps): React.ReactElement {
	return (
		<div className={containerStyle}>
			<GridComponent extraButtonStyles={gridTableStyle}>
				<GridItemComponent
					extraButtonStyles={classNames(cellStyle, headerStyle)}
				>
					<TextComponent>Todo Title</TextComponent>
				</GridItemComponent>

				<GridItemComponent
					extraButtonStyles={classNames(cellStyle, headerStyle)}
				>
					<TextComponent>Description</TextComponent>
				</GridItemComponent>

				<GridItemComponent
					extraButtonStyles={classNames(cellStyle, headerStyle)}
				>
					<TextComponent>Actions</TextComponent>
				</GridItemComponent>

				{todos.map((todo) => (
					<TodoDesktopElementComponent todo={todo} />
				))}
			</GridComponent>
		</div>
	);
}
