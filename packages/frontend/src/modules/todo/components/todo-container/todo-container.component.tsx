import React from 'react';
import TodoElementComponent, {
	ITodo,
} from '../todo-element/todo-element.component';
import GridComponent from '~shared/components/grid/grid.component';
import GridItemComponent from '~shared/components/grit-item/grid-item.component';

export interface TodoContainerComponentProps {
	todos: ITodo[];
}

export default function TodoContainerComponent({
	todos,
}: TodoContainerComponentProps): React.ReactElement {
	return (
		<>
			<div>
				<GridComponent>
					{todos.map((todo, index) => {
						return (
							<GridItemComponent key={todo.id}>
								<TodoElementComponent
									todo={todo}
									index={index}
								/>
							</GridItemComponent>
						);
					})}
				</GridComponent>
			</div>
		</>
	);
}
