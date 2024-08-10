import React from 'react';
import { useForm } from 'react-hook-form';
import { form, input, button } from './todo-form.style';
import { ITodo } from '../todo-element/todo-element.component';
import { useNavigate } from 'react-router-dom';

export interface TodoFormComponentProps {
	status: 'Edit' | 'Add';
	todo?: ITodo;
	id?: number;
	addTodo?: (data: Partial<ITodo>) => void;
	editTodo?: (id: number, data: Partial<ITodo>) => void;
}

export default function TodoFormComponent({
	status,
	todo,
	id,
	addTodo,
	editTodo,
}: TodoFormComponentProps): React.ReactElement {
	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm(
		status === 'Edit' && {
			defaultValues: {
				title: todo.title,
				description: todo.description,
			},
		},
	);

	const onSubmit = (data: Partial<ITodo>): void => {
		status === 'Edit' && editTodo && editTodo(id, data);
		status === 'Add' && addTodo && addTodo(data);
		reset();
		navigate(-1);
	};

	return (
		<form className={form} onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register('title', { required: true })}
				className={input}
				placeholder="Add title"
			/>
			<input
				{...register('description')}
				className={input}
				placeholder="Add description"
			/>
			<button className={button} type="submit">
				Submit
			</button>
		</form>
	);
}
