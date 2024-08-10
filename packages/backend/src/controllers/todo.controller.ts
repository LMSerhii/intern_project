import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { TodoType } from '@/types/todos.type';
import { User } from '@prisma/client';
import HttpError from '@/utils/http-error.util';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(_: Request, res: Response): Promise<void> {
		// TODO: Write your implementation here
		const todos = await this.todoService.findAll();

		res.send(todos);
	}

	async getAllTodoWithAccess(req: Request, res: Response): Promise<void> {
		const user = req.user as User;

		const todos = await this.todoService.findAllWithAccess(user.id);

		res.send(todos);
	}

	async createTodo(req: Request, res: Response): Promise<void> {
		const data: Omit<TodoType, 'id'> = req.body;
		const user = req.user as User;

		const todo = await this.todoService.create({
			...data,
			userId: user.id,
		});

		res.status(201).send(todo);
	}

	async updateTodo(req: Request, res: Response): Promise<void> {
		const id = parseInt(req.params.id);
		const data: Partial<Omit<TodoType, 'id'>> = req.body;
		const user = req.user as User;

		const todo = await this.todoService.findTodoById(id);

		if (!todo || todo.userId !== user.id)
			throw HttpError(403, 'Access denied');

		const updatedTodo = await this.todoService.update(id, data);

		res.send(updatedTodo);
	}

	async deleteTodo(req: Request, res: Response): Promise<void> {
		const id = parseInt(req.params.id);
		const user = req.user as User;

		const todo = await this.todoService.findTodoById(id);

		if (!todo || todo.userId !== user.id) {
			throw HttpError(403, 'Access denied');
		}

		await this.todoService.delete(id);

		res.sendStatus(204);
	}

	async updateDoneTodo(req: Request, res: Response): Promise<void> {
		const id = parseInt(req.params.id);
		const done: boolean = req.body.done;
		const user = req.user as User;

		const todo = await this.todoService.findTodoById(id);

		if (!todo || todo.userId !== user.id) {
			throw HttpError(403, 'Access denied');
		}

		const updatedTodo = await this.todoService.updateDone(id, done);

		res.send(updatedTodo);
	}

	async updatePrivateTodo(req: Request, res: Response): Promise<void> {
		const id = parseInt(req.params.id);
		const privateTodo: boolean = req.body.private;
		const user = req.user as User;

		const todo = await this.todoService.findTodoById(id);

		if (!todo || todo.userId !== user.id) {
			throw HttpError(403, 'Access denied');
		}

		const updatedTodo = await this.todoService.updatePrivate(
			id,
			privateTodo,
		);

		res.send(updatedTodo);
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
