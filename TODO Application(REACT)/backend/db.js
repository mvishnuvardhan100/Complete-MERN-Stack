const mongoose = require("mongoose");

async function connection() {
  await mongoose.connect(process.env.connectinString);
}
connection();

const TODO = mongoose.model("TODOS", {
  title: String,
  description: String,
  completed: Boolean
}, "todos");

module.exports = {
  TODO
};