import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';

import AppRouter from './routes';
import errorHandler from './middlewares/error-handler.middleware';
import notFoundErrorHandler from './middlewares/not-found-error-handler.middleware';

const port = 8080;
const app: Express = express();
app.use(morgan('dev'));
app.use(cors());

const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Node!');
});

router.init();

app.use(notFoundErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
