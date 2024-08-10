import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TodoElementComponent, {
	ITodo,
} from '../todo-element/todo-element.component';
import classNames from 'classnames';
import {
	customSwiperStyles,
	slideStyle,
	swiperStyle,
} from './todo-swiper.styles';

export interface TodoSwiperTabletComponentProps {
	todos: ITodo[];
}

export default function TodoSwiperTabletComponent({
	todos,
}: TodoSwiperTabletComponentProps): React.ReactElement {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			centeredSlides={true}
			spaceBetween={10}
			slidesPerView={2}
			navigation
			loop={true}
			pagination={{ clickable: true }}
			className={classNames(swiperStyle, customSwiperStyles)}
		>
			{todos.map((todo, index) => (
				<SwiperSlide key={todo.id} className={slideStyle}>
					<TodoElementComponent todo={todo} index={index} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
