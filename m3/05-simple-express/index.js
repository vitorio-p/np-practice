// thought process
// get the express module? is it installed? => setup the express app
// require exist only in nodejs
// when we require express, we are importing express object
// nodejs looks for index.js inside the express module
// variable express will store the entire express object

const express = require('express');

// create an express app
const app = express();

// add routes
// create simple route to the root
// we want to match a desired route (request) to what the server has to route

app.get('/', function (req, res) {
    console.log("entering root");
    res.send("hello");
})

app.get('/color', function(req, res) {
    res.send("add a '/red' or '/blue' behind current url");
  })

app.get('/color/:color', function (req, res) {
    let color = req.params.color
    let modified = color.toUpperCase();
    res.send(modified);
})

app.get('/hello/:name')

app.get('/about-us', function (req, res) {
    res.send("about hello");
})

app.listen(3000, function() {
    console.log("server started");
})

