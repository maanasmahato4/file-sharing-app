import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export default function validateResource(
	schema: z.AnyZodObject
): (
	req: Request,
	res: Response,
	next: NextFunction
) => Promise<Response | void> {
	return async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> => {
		try {
			schema.parse({
				body: req.body,
				params: req.params,
				query: req.query
			});
			next();
		} catch (error) {
			return res.status(500).json({ error });
		}
	};
}
