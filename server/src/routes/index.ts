import { Router } from 'express';

export default function Routes(): Router {
	const router = Router();

	router.post('/v1/file').get('v1/file').post('/v1/sender');

	return router;
}
