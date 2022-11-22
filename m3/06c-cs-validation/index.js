const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');


let app = express();
app.set('view engine', 'hbs');
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath('./views/layouts');

app.use(express.urlencoded({
    'extended':false
}))

// routes
app.get('/', function(req,res){
    res.render("home")
})

app.listen(3000, function(){
    console.log("server started");
})