const http = require('http');

function reqServer() {

}

const server = http.createServer((req, res) => {
    //console.log(request);
    //retrieve the url request that's coming in;
    //retrieve the method
    console.log(req.url, req.method);

    process.exit();
});

server.listen(3000);