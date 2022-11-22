// ensure express, hbs, nodemon ins installed

// 1. require express
const express = require('express');

//5. require handlebars hbs
const hbs = require('hbs');

// 2. setup express app
const app = express();

// 6. setup our template engine, put it after our express.app is created
app.set('view engine', 'hbs');

// 7. physical change in folders
// create a folder views
// inside views create index.hbs || <yourfilename>.hbs

// 10. create a public folder (to serve up static files)
// what are static files? css, js, image, vid
app.use(express.static('static'));

// 3. start with soimple routing to test express is ok
app.get('/', function(req, res) {
    // res.send('hello, wolrd');

    // 8. change to use a hbs view
    res.render('index.hbs'); // don't need to search like /views/index.hbs
});

// 9. new route with parameters
app.get('/hello/:firstName', function(req, res) {
    let fName = req.params.firstName;
    console.log(fName);
    res.render('hello', {
        firstName: fName
    })
})

// 4. start server and listen, register listener
app.listen(3000, function() {

})