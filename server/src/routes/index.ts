import { Router } from 'express';
import {
	storeAndShareFile,
	downloadFile
} from '../controllers/fileTransfer.controller.js';
import { sendMail } from '../controllers/mailer.controller.js';
import validateResource from '../middlewares/validateResource.middleware.js';
import { senderSchemaObject } from '../schema/sender.schema.js';
import upload from '../middlewares/validateFile.middleware.js';

const router = Router();

router
	.post('/v1/file', upload.single('image'), storeAndShareFile)
	.get('/v1/file', downloadFile)
	.post('/v1/sender', validateResource(senderSchemaObject), sendMail);

export default router;
