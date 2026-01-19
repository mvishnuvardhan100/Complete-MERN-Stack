require("dotenv").config();
const express = require("express");
const path = require("path");
const typesPath = path.join(__dirname, "types.js");
const dbPath = path.join(__dirname, "db.js");
const { addTODO, updateTODO } = require(typesPath);
const { TODO } = require(dbPath);
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const result = addTODO.safeParse(req.body);
  if(!result.success) {
    return res.status(400).send({
      msg: "Not the expected input format"
    });
  } else {
    await TODO.create({
      title: req.body.title,
      description: req.body.description,
      completed: false
    });
    return res.status(200).send({
      msg: "TODO added successfully"
    });
  }
});

app.get("/todos", async (req, res) => {
  const todos = await TODO.find();
  return res.status(200).send({
    todos
  });
});

app.put("/completed", async (req, res) => {
  const result = updateTODO.safeParse(req.body);
  if(!result.success) {
    return res.status(400).send({
      msg: "Not the expected input format"
    });
  } else {
    await TODO.findByIdAndUpdate({
      _id: req.body._id
    }, {
      completed: true
    });
    return res.status(200).send({
      msg: "Marked as done!"
    });
  }
});



app.listen(port, () => {
  console.log("Started listening");
});