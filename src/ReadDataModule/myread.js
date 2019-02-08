var fs = require("fs");

function readData(err, data) {
      console.log(data);
}

fs.readFile('newtestfile.txt', 'utf8', readData);
