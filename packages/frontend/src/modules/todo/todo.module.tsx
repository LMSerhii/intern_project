import React from 'react';
import { css } from '@emotion/css';
import { useMediaQuery } from 'react-responsive';
import TodoContainerComponent from './components/todo-container/todo-container.component';
import TodoSwiperTabletComponent from './components/todo-swiper-tablet/todo-swiper-tablet.component';
import TodoTableDesktopComponent from './components/todo-table-desktop/todo-table-desktop.component';

import SearchPanelComponent from '~shared/components/search-panel/search-panel.component';
import StatusPanelComponent from './components/status-panel/status-panel.component';
import { ITodo } from './components/todo-element/todo-element.component';

export interface TodoModuleProps {
	todos: ITodo[];
}

export default function TodoModule({
	todos,
}: TodoModuleProps): React.ReactElement {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

	return (
		<>
			<div className={barWrapp}>
				<SearchPanelComponent onSearch={(data) => console.log(data)} />
				<StatusPanelComponent />
			</div>
			{isMobile && <TodoContainerComponent todos={todos} />}
			{isTablet && <TodoSwiperTabletComponent todos={todos} />}
			{!isMobile && !isTablet && (
				<TodoTableDesktopComponent todos={todos} />
			)}
		</>
	);
}

export const barWrapp = css`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;

	@media (min-width: 768px) {
		flex-direction: row-reverse;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 60px;
	}
`;
