const { response } = require('express');
const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');
const PORT_NUM = 3000;

const app = express();

app.set('view engine', 'hbs');

waxOn.on(hbs.handlebars);
waxOn.setLayoutPath('./views/layouts');

hbs.registerHelper('ifEquals', function(arg1, arg2, options){
    if (arg1 == arg2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

hbs.registerHelper('list', function(arg1, options){
    let output = '<ul>';

    if (arg1.length > 0) {
        let output = '<ul>';

    for (let i = 0; i < arg1.length; i++) {
        output += '<li>' + options.fn(arg1[i]) + '</li>';

    }
    return output + '</ul>';
} else {
    return options.inverse(this);
}
});

app.get('/', function(req, res){
    // res.send("hi there");
    console.log('/ route is working');

    res.render('simple-helper')
});

app.get('/students', (req, res) => {
    res.render("simple-list-helper", {
        students: [
          { firstName: "Ah Seng", lastName: "Tan" },
          { firstName: "Kim Lim", lastName: "Tan" },
          { firstName: "Joseph", lastName: "Tan" },
        ]
    });
});

app.get('/students-array', (req, res) => {
    res.render('simple-array-with-index', {
        "students": ['Kai', 'Dewi', 'Vito', 'Bryan']
    });
});

app.listen(PORT_NUM, function(){
    console.log("connecting to server");
});