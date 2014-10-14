var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var lines = (buffer.split("\n").toString().length) - 1;

console.log(lines);


