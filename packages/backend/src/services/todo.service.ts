import { TodoType } from '@/types/todos.type';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class TodoService {
	async findAll(): Promise<TodoType[]> {
		const todos: TodoType[] = await prisma.todo.findMany({
			where: { private: false },
		});

		return todos;
	}

	async findAllWithAccess(userId: number): Promise<TodoType[]> {
		const todos: TodoType[] = await prisma.todo.findMany({
			where: {
				OR: [
					{ private: true, userId: userId },

					{ private: false, userId: userId },

					{ private: false, userId: { not: userId } },
				],
			},
		});

		return todos;
	}

	async findTodoById(id: number): Promise<TodoType> {
		const todo = (await prisma.todo.findUnique({
			where: { id: Number(id) },
		})) as TodoType;

		return todo;
	}

	async create(data: Omit<TodoType, 'id'>): Promise<TodoType> {
		const todo: TodoType = await prisma.todo.create({ data });

		return todo;
	}

	async update(
		id: number,
		data: Partial<Omit<TodoType, 'id'>>,
	): Promise<TodoType> {
		const todo: TodoType = await prisma.todo.update({
			where: { id: Number(id) },
			data,
		});

		return todo;
	}

	async delete(id: number): Promise<TodoType> {
		const todo: TodoType = await prisma.todo.delete({
			where: { id: Number(id) },
		});

		return todo;
	}

	async updateDone(id: number, done: boolean): Promise<TodoType> {
		const todo: TodoType = await prisma.todo.update({
			where: { id: Number(id) },
			data: { done },
		});

		return todo;
	}

	async updatePrivate(id: number, privateTodo: boolean): Promise<TodoType> {
		const todo: TodoType = await prisma.todo.update({
			where: { id: Number(id) },
			data: { private: privateTodo },
		});

		return todo;
	}
}
