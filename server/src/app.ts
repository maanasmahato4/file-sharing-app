import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';
import globalErrorHandler from './utils/globalCatch.js';
import { PORT } from './utils/contants.js';
import DatabaseConnection from './database/database.js';
import createDirectories from './utils/createFolders.js';

dotenv.config();
const app = express();

//middlewares
app.use(helmet());
app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:5173']
	})
);
app.use(
	compression({
		level: 1
	})
);
app.use(express.json());
app.use('/yoho', (req, res) => res.status(200).json({ success: true }));

app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
	createDirectories();
	DatabaseConnection();
	app.use('/api', routes);
	// global error handler
	app.use(globalErrorHandler);
});
