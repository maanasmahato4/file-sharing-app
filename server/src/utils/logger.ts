import winston from 'winston';

const { label, timestamp, errors } = winston.format;

const logFormat = winston.format.printf(
	({ level, message, timestamp, stack }) => {
		if (stack) {
			return `${timestamp} ${level}: ${message}\n${stack}`;
		} else {
			return `${timestamp} ${level}: ${message}`;
		}
	}
);

const logger: winston.Logger = winston.createLogger({
	level: 'info',
	format: winston.format.combine(
		label({ label: 'logger' }),
		timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		errors({ stack: true }),
		logFormat
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ dirname: 'logs', filename: 'logs.log' })
	]
});

export default logger;
