import { Request, Response } from 'express';
import logger from '../utils/logger.js';
//import { sendMail } from './mailer.controller.js';

export async function downloadFile(
	req: Request,
	res: Response
): Promise<Response | void> {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(404).json({ error: 'sender id not found' });
		}
		/* const senderData = await Sender.findOne({ where: { id: id } });
		if (!senderData) {
			return res.status(404).json({ error: 'no file found' });
		}
		res.status(200).download(senderData.filePath); */
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
		if (!req.file) {
			return res.status(404).json({ error: 'file not found' });
		}
		return res.status(200).json({ file: req.file.path });
	} catch (error) {
		logger.error(error);
		return res.status(500).json({ error });
	}
}
