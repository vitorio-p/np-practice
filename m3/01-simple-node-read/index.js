const fs = require('fs');

fs.readFile('./panda.json', 'utf-8', (err, data) => {
    console.log(data);
});