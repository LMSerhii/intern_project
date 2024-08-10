import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import catchAsync from '@/utils/catch-async.util';
import validateBody from '@/utils/validate-body.util';
import {
	doneUpdateSchema,
	privateUpdateSchema,
	todoSchema,
	todoUpdateSchema,
} from '@/schemas/todo.schema';
import isExist from '@/utils/isExist';
import { PrismaClient, Todo } from '@prisma/client';
import AuthMiddleware from '@/middlewares/auth.middleware';

const prisma = new PrismaClient();

const todosRouter: Router = Router();
const authMiddleware = new AuthMiddleware();

todosRouter.get(
	'/all',
	catchAsync(todoController.getAllTodo.bind(todoController)),
);
todosRouter.get(
	'/all-access',
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(todoController.getAllTodoWithAccess.bind(todoController)),
);
todosRouter.post(
	'/',
	validateBody(todoSchema),
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(todoController.createTodo.bind(todoController)),
);
todosRouter.put(
	'/:id',
	isExist<Todo>(prisma.todo),
	validateBody(todoUpdateSchema),
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(todoController.updateTodo.bind(todoController)),
);
todosRouter.delete(
	'/:id',
	isExist<Todo>(prisma.todo),
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(todoController.deleteTodo.bind(todoController)),
);

todosRouter.patch(
	'/:id/updateDone',
	isExist<Todo>(prisma.todo),
	validateBody(doneUpdateSchema),
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(todoController.updateDoneTodo.bind(todoController)),
);

todosRouter.patch(
	'/:id/updatePrivate',
	isExist<Todo>(prisma.todo),
	validateBody(privateUpdateSchema),
	catchAsync(authMiddleware.auth.bind(authMiddleware)),
	catchAsync(todoController.updatePrivateTodo.bind(todoController)),
);

export default todosRouter;
