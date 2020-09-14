const db = require('../configs/db');
const TasksController = require('../controllers/tasks-controller');

const {response} = require('../server');

const tasksController = new TasksController(db);

module.exports = (app) => {
	app.get('/', tasksController.homeTasks());

	/*	(req, res) => {
		tasksDao.tasksList().then((tasks) => {
			res.send(generateToDoPage(tasks));
		});
	});
*/
};
