import { Request, Response } from 'express';
import logger from '../utils/logger.js';

export async function sendMail(req: Request, res: Response): Promise<Response> {
	try {
		return res.status(200);
	} catch (error: unknown) {
		logger.error(error);
		return res.status(500).json({ error });
	}
}
