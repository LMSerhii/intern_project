import { create } from 'zustand';
import TodoService from '../shared/services/todo.service';
import { ITodo } from '~modules/todo/components/todo-element/todo-element.component';

export enum Status {
	All = 'all',
	PUBLIC = 'public',
	PRIVATE = 'private',
	COMPLETED = 'completed',
}
interface TodoStore {
	todos: ITodo[];
	isLoading: boolean;
	isError: Error | null;
	status: Status;
	isEdit: boolean;
	selectedTodo: ITodo | null;
	fetchPublicTodos: () => void;
	fetchAccessTodos: () => void;
	addTodo: (todo: ITodo) => void;
	editTodo: (id: number, todo: ITodo) => void;
	removeTodo: (id: number) => void;
	updateTodoDone: (id: number, done: boolean) => void;
	updateTodoPrivate: (id: number, isPrivate: boolean) => void;
	toggleEdit: (isEdit?: boolean) => void;
	setSelectedTodo: (todo: ITodo) => void;
	setStatusTodo: (status: Status) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
	todos: [],
	isLoading: false,
	isError: null,
	status: Status.All,
	isEdit: false,
	selectedTodo: null,

	fetchPublicTodos: async (): Promise<void> => {
		try {
			set({ isLoading: true });
			const todos = await TodoService.getPublicTodos();

			set({ isLoading: false, todos });
		} catch (error) {
			set({ isLoading: false, isError: error });
		}
	},

	fetchAccessTodos: async (): Promise<void> => {
		try {
			set({ isLoading: true });
			const todos = await TodoService.getAccessTodos();

			set({ isLoading: false, todos });
		} catch (error) {
			set({ isLoading: false, isError: error });
		}
	},

	addTodo: async (todo): Promise<void> => {
		try {
			set({ isLoading: true });

			const newTodo = await TodoService.createTodo(todo);
			set((state) => ({
				isLoading: false,
				todos: [...state.todos, newTodo],
			}));
		} catch (error) {
			set({ isLoading: false, isError: error });
		}
	},

	editTodo: async (id, todo): Promise<void> => {
		try {
			set({ isLoading: true });

			const updatedTodo = await TodoService.updateTodo(id, todo);
			set((state) => ({
				isLoading: false,
				todos: state.todos.map((t) => (t.id === id ? updatedTodo : t)),
			}));
		} catch (error) {
			set({ isLoading: false, isError: error });
		}
	},

	removeTodo: async (id): Promise<void> => {
		try {
			set({ isLoading: true });

			await TodoService.deleteTodo(id);
			set((state) => ({
				isLoading: false,
				todos: state.todos.filter((t) => t.id !== id),
			}));
		} catch (error) {
			set({ isLoading: false, isError: error });
		}
	},

	updateTodoDone: async (id: number, done: boolean): Promise<void> => {
		try {
			set({ isLoading: true });

			const updatedTodo = await TodoService.updateTodoDone(id, done);
			set((state) => ({
				isLoading: false,
				todos: state.todos.map((t) => (t.id === id ? updatedTodo : t)),
			}));
		} catch (error) {
			set({ isLoading: false, isError: error });
		}
	},

	updateTodoPrivate: async (
		id: number,
		isPrivate: boolean,
	): Promise<void> => {
		try {
			set({ isLoading: true });

			const updatedTodo = await TodoService.updateTodoPrivate(
				id,
				isPrivate,
			);

			set((state) => ({
				isLoading: false,
				todos: state.todos.map((t) => (t.id === id ? updatedTodo : t)),
			}));
		} catch (error) {
			set({ isLoading: false, isError: error });
		}
	},

	toggleEdit: (isEdit = true): void => set(() => ({ isEdit })),

	setSelectedTodo: (todo): void => set(() => ({ selectedTodo: todo })),

	setStatusTodo: (status): void => set(() => ({ status })),
}));
