let fs = require('fs');
console.log(JSON.parse(fs.readFileSync('./module.json', 'utf-8')).version);