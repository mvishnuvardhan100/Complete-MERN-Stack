const fs = require("fs");
const path = require("path");


const filePath = path.join(__dirname, "intro.txt");
function vishnusFileRead() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if(err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
}

async function main() {
  const dataFromFile = await vishnusFileRead();
  console.log(dataFromFile);
}
main();

console.log("Synchronous code ends");