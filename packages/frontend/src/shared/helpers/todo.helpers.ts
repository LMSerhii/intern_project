import { ITodo } from '~modules/todo/components/todo-element/todo-element.component';

export const findTodo = (todos: ITodo[], id: number): ITodo =>
	todos.find((todo) => todo.id === id) || null;
