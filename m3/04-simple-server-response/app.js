// init http module
const http = require("http");
const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    console.log(`User req url ${url}`);

    console.log("User coming in...");

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head></head>");
    res.write("<body><h1>hi there</h1></body>");
    res.write("hi there");
    res.end();
  } else if (url === "/about") {
    console.log(`User req url ${url}`);

    console.log("User coming in...");

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head></head>");
    res.write("<body><h1>about us</h1></body>");
    res.write("hi there");
    res.end();
  } else if (url === "/contact") {
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

//listen
server.listen(3000);
