const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

let app = express();
app.set('view engine', 'hbs');
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

app.use(express.urlencoded({
    'extended': false
}));

app.get('/', (req, res) => {
    res.render('simple-form');
});

app.post('/', (req, res) => {
    console.log(req.body);

    let foodName = req.body.foodName;
    let cuisine = req.body.cuisine;

    let tags = [];

    if (req.body.tags){
        if(Array.isArray(req.body.tags)){
            tags = req.body.tags;
        } else {
            tags = [req.body.tags]
        }
    }
    console.log(`tags = ${tags}`);
    if(req.body.tags) {
        res.render('success');
    } else {
        res.render('simple-form', {
            'err': true,
            'errorMsg': 'error in tag. choose a tag'
        });
    }
});

app.listen(3000, (req, res) => {
    console.log('loading...');
});