const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;
const filesPath = path.join(__dirname, "files");

function listFiles() {
  return new Promise((resolve) => {
    fs.readdir(filesPath, (err, files) => {
      resolve(files);
    });
  });
}

function fileInfo(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

app.get("/files", async (req, res) => {
  const files = await listFiles();
  return res.status(200).send({
    files
  });
});

app.get("/file/:fileName", async (req, res) => {
  const fileName = req.params.fileName;
  const files = await listFiles();
  let isExist = false;
  for(let i = 0; i < files.length; i++) {
    if(fileName == files[i]) {
      isExist = true;
      break;
    }
  }
  if(!isExist) {
    return res.status(404).send({
      msg: "File requested is not found"
    });
  } else {
    const filePath = path.join(__dirname, "files", fileName);
    const data = await fileInfo(filePath);
    return res.status(200).send({
      data
    });
  }

});

app.use((req, res) => {
  return res.status(404).send({
    msg: "Route not found"
  });
});

app.listen(port, () => {
  console.log("Started listening");
});