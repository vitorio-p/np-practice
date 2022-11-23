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

let itemRecords = [
    {
        id: 1,
        itemName: 'iPhone',
        email: 'vito@fp.com',
        location: 'Taxi',
        properties: ['Expensive', 'Branded', 'Small']
    },
    {
        id: 2,
        itemName: 'Brown bag',
        email: 'ken@fp.com',
        location: 'MRT',
        properties: ['Plain']
    },
]

// routes
app.get('/', function(req, res){
    let allItems = itemRecords;
    res.render("home", {
        allItems: allItems
    });
});

app.get('/add-item', function(req, res){
    res.render("add-item");
});

app.post('/add-item', function(req, res) {
    let itemName = req.body.itemName;
    let email = req.body.email;
    let location = req.body.location;

    let properties = [];
    if (req.body.properties) {
        if (Array.isArray(req.body.properties)) {
            properties = req.body.properties;
        } else {
            properties.push(req.body.properties);
        }
    };

    let newItem = {
        id: Math.floor(Math.random() * 10000 + 1),
        itemName: itemName,
        email: email,
        location: location,
        properties: properties
    }

    itemRecords.push(newItem);

    res.redirect('/')
})

app.listen(3000, function(){
    console.log("server started");
});