import fs from 'fs';
import path from 'path';

const UPLOAD_DIRECTORY = path.join(process.cwd(), 'uploads');

export default function createDirectories() {
	if (!fs.existsSync(UPLOAD_DIRECTORY)) {
		fs.mkdirSync(UPLOAD_DIRECTORY);
	}

	console.log('All directories created!');
}
