import { ErrorRequestHandler } from 'express';
import logger from './logger.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalCatch: ErrorRequestHandler = (err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';

	logger.error(err);

	if (status >= 500) {
		return res.status(status).json({ error: message, stack: err.stack });
	} else {
		return res.status(status).json({ error: 'Something went wrong.' });
	}
};

export default globalCatch;
