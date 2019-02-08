var fs = require('fs');

function readData(err, data) {
console.log("The data is being read and will be copied to target.txt shortly...");

fs.writeFile("./target.txt", data, function(err) {
if(err) {
returnconsole.log(err);
        }

console.log("The file was saved!");
    }); 
}

fs.readFile('./newtestfile.txt', 'utf8', readData);
