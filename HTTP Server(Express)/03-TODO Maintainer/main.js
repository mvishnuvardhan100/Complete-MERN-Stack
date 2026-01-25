const express = require("express");
const path = require("path");
const fs = require("fs");

const todoListPath = path.join(__dirname, "todoList.txt");
const app = express();
const port = 3000;
app.use(express.json());

function getTodos() {
  return new Promise((resolve) => {
    fs.readFile(todoListPath, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

function addTODO(todo) {
  const lines = [
    todo.title,
    todo.description
  ];

  const data = lines.join("\n") + "\n";

  return new Promise((resolve) => {
    fs.appendFile(todoListPath, data, "utf-8", (err) => {
      if(!err) {
        resolve("Added successfully");
      }
    });
  });
}

app.get("/todos", async (req, res) => {
  const data = await getTodos();
  return res.status(200).send({
    todos: data
  }); 
});

app.post("/todo", async (req, res) =>{
  const msg = await addTODO(req.body);
  return res.status(200).send({
    msg
  });
});

app.listen(port, () => {
  console.log("Started lostening");
});