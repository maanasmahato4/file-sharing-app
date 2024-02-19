import { Sequelize } from 'sequelize';
import logger from '../utils/logger.js';
import {
	DATABASE_USERNAME,
	DATABASE_PORT,
	DATABASE_PASSWORD,
	DATABASE_NAME,
	DATABASE_HOST
} from '../utils/contants.js';

export const database = new Sequelize(
	DATABASE_NAME,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	{
		host: DATABASE_HOST,
		dialect: 'postgres',
		port: DATABASE_PORT
	}
);

export default async function DatabaseConnection() {
	try {
		await database.authenticate();
		console.log('Database connection established');
	} catch (error) {
		logger.error(error);
		process.exit(1);
	}
}
