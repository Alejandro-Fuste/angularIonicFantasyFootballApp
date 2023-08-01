const fs = require("fs");

function appendToFile(fileName, data) {
  fs.appendFile(fileName, data + "\n", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File was written successfully!");
    }
  });
}

module.exports = appendToFile;
