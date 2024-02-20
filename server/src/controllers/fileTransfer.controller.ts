import { Request, Response } from 'express';
import logger from '../utils/logger.js';
//import { sendMail } from './mailer.controller.js';

export async function downloadFile(
	req: Request,
	res: Response
): Promise<Response> {
	try {
		return res.status(200).json({ success: true });
	} catch (error) {
		logger.error(error);
		return res.status(500).json({ error });
	}
}

export async function storeAndShareFile(
	req: Request,
	res: Response
): Promise<Response> {
	try {
		console.log(req.file?.originalname);
		return res.status(200).json({ file: req.file?.originalname });
	} catch (error) {
		logger.error(error);
		return res.status(500).json({ error });
	}
}
