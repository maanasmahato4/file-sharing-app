import { z } from 'zod';

export const senderSchemaObject = z.object({
	body: z.object({
		sender: z.string({
			required_error: 'sender email is required'
		}),
		receiver: z.string({
			required_error: 'receiver email is required'
		}),
		fileUrl: z.string({
			required_error: 'file url is required'
		})
	})
});
