const db = require('../configs/db');

class TasksDao {
	constructor(db) {
		this._db = db;
	}

	tasksList() {
		return new Promise((resolve, reject) => {
			this._db.all('SELECT * FROM TASKS', (err, rows) => {
				if (err) {
					reject('Erro na consulta');
				} else {
					resolve(rows);
				}
			});
		});
	}
}

module.exports = TasksDao;
