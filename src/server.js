const express = require('express');

const tasksRoutes = require('./routes/routes-tasks');

const app = express();
const port = 3000;

tasksRoutes(app);

app.listen(port, () =>
	console.log(`Server running on port http://192.168.15.7:${port}`)
);

module.exports = app;
