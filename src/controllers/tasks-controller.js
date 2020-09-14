const TasksDao = require('../DAO/tasks-dao');
const generateToDoPage = require('../views/template_todo_app');

class TasksController {
	//realizar consulta ao banco
	//pegar dados do banco e injetar na view
	//retornar a resposta para o navegador (view renderizada)

	constructor(db) {
		this.tasksDao = new TasksDao(db);
	}

	homeTasks() {
		return (req, res) => {
			this.tasksDao.tasksList().then((tasks) => {
				res.send(generateToDoPage(tasks));
			});
		};
	}
}

module.exports = TasksController;
