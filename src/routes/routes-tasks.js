const generateToDoPage = require('../views/template_todo_app');
const db = require('../configs/db');

const {response} = require('../server');

module.exports = (app) => {
	app.get('/', (req, res) => {
		db.all('SELECT * FROM TASKS', (err, rows) => {
			res.send(generateToDoPage(rows));
		});
	});
};
