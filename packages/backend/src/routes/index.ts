import { Application } from 'express';
import todosRouter from './api/todos.route';
import usersRouter from './api/users.route';

class AppRouter {
	constructor(private app: Application) {}

	init(): void {
		this.app.get('/', (_req, res) => {
			res.send('API Running');
		});
		this.app.use('/api/todos', todosRouter);
		this.app.use('/api/users', usersRouter);
	}
}

export default AppRouter;
