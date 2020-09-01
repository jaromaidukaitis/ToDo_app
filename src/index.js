const express = require("express");
const todoTemplate = require("./views/template_todo_app");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send(todoTemplate);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
