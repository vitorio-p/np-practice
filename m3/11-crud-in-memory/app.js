const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');


let app = express(); //create the express application
app.set('view engine', 'hbs'); // inform express that we are using hbs as the view engine
waxOn.on(hbs.handlebars); // enable wax-on for handlebars (for template inheritance)
waxOn.setLayoutPath('./views/layouts') // inform wax-on where to find the layouts

app.use(express.urlencoded({
    'extended':false // for processing HTML forms usually it's false because
                     // HTML forms are usually quite simple
}))

let foodRecords = [
    {
        id: 1,
        foodName: "Chicken Rice",
        calories: 400,
        meal: 'lunch',
        tags: ['chinese'],
    },
    {
        id: 2,
        foodName: "Truffle Pizza",
        calories: 800,
        meal: 'lunch',
        tags: ['italian', 'fancy'],
    }
]

// CRUD

app.get('/all-food', function(req, res) {
    let allFood = foodRecords;
    res.render('all-food', {
        allFood: allFood
    })
});

// routes
app.get('/', function(req,res){
    res.send("hello world")
});

app.listen(3000, function(){
    console.log("server started");
});