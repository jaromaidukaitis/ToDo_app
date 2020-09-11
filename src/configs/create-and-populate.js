/* ESTE ARQUIVO DEVE SER EXECUTADO APENAS UMA VEZ PARA QUE O BANCO SEJA CRIADO E POPULADO*/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const TASKS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS TASKS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(64),
        description TEXT,
        status VARCHAR(32)
    )
`;

const ADD_TASKS = `
    INSERT INTO TASKS (
        title,
        description,
        status
    )
    VALUES 
        ('Yoga', 'Fazer Yoga de segunda a sexta', 'Contínuo'),
        ('Médico', 'Consulta com Dra Camila Assad', 'TODO'),
        ('Pagar Contas', 'Pagar boletos de água e luz', 'DOING')
`;

db.serialize(() => {
	db.run(TASKS_SCHEMA, (err) => {
		if (err) {
			console.log('Erro na criação da tabela de tarefas');
			process.exit(1);
		}
	});
	db.run(ADD_TASKS, (err) => {
		if (err) {
			console.log('Erro ao adicionar entradas ao banco');
			process.exit(1);
		}
	});
});
