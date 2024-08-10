import { ITodo } from '~modules/todo/components/todo-element/todo-element.component';
import HttpService from './http';

class TodoService extends HttpService {
	constructor() {
		super();
	}

	async getPublicTodos(): Promise<ITodo[]> {
		const response = await this.get({ url: 'todos/all' }, false);
		return response.data as ITodo[];
	}

	async getAccessTodos(): Promise<ITodo[]> {
		const response = await this.get({ url: 'todos/all-access' }, true);
		return response.data as ITodo[];
	}

	async createTodo(todo: ITodo): Promise<ITodo> {
		const response = await this.post({ url: 'todos', data: todo }, true);
		return response.data as ITodo;
	}

	async updateTodo(id: number, todo: ITodo): Promise<ITodo> {
		const response = await this.put(
			{ url: `todos/${id}`, data: todo },
			true,
		);
		return response.data as ITodo;
	}

	async deleteTodo(id: number): Promise<ITodo> {
		const response = await this.delete({ url: `todos/${id}` }, true);
		return response.data;
	}

	async updateTodoDone(id: number, done: boolean): Promise<ITodo> {
		const response = await this.patch(
			{
				url: `todos/${id}/updateDone`,
				data: { done },
			},
			true,
		);
		return response.data as ITodo;
	}

	async updateTodoPrivate(id: number, isPrivate: boolean): Promise<ITodo> {
		const response = await this.patch(
			{
				url: `todos/${id}/updatePrivate`,
				data: { private: isPrivate },
			},
			true,
		);
		return response.data as ITodo;
	}
}

export default new TodoService();
