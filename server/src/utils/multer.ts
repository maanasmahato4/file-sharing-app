import multer, { MulterError } from 'multer';
import path from 'path';
import { Request } from 'express';

const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		const uniqueFileName = `${Date.now()}-${Math.random() * 1000}-${file.originalname}`;
		cb(null, uniqueFileName);
	}
});

const fileFilter = (
	req: Request,
	file: Express.Multer.File,
	cb: multer.FileFilterCallback
) => {
	const allowedExtensions = ['.gzip', '.zip'];
	const extName = path.extname(file.originalname);
	if (allowedExtensions.includes(extName)) {
		cb(
			new MulterError(
				'LIMIT_UNEXPECTED_FILE',
				`File mimetype not supported: ${extName}`
			)
		);
	} else {
		cb(null, true);
	}
};

const upload = multer({
	storage: diskStorage,
	fileFilter: fileFilter
});

export default upload;
