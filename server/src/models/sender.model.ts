import { DataTypes } from 'sequelize';
import { database } from '../database/database.js';

const Sender = database.define('sender', {
	id: {
		type: DataTypes.UUID,
		allowNull: false,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	sender: {
		type: DataTypes.STRING,
		allowNull: false
	},
	receiver: {
		type: DataTypes.STRING,
		allowNull: false
	},
	filePath: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

Sender.sync()
	.then(() => console.log('table created'))
	.catch((err) => console.error(err));

export default Sender;
