import multer from 'multer';
import { diskStorage, fileFilter } from '../utils/multer.js';

const upload = multer({ storage: diskStorage, fileFilter });
export default upload;
