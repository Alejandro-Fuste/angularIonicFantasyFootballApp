const fs = require("fs");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File was written successfully!");
    }
  });
}

module.exports = writeToFile;
