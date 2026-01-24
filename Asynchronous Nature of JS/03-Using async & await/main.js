const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "intro.txt");

function VishnusFileRead() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  const data = await VishnusFileRead();
  console.log(data);
}

main();
console.log("Synchronous code ended");