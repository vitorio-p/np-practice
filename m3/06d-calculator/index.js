const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

let app = express(); //create the express application
app.set("view engine", "hbs"); // inform express that we are using hbs as the view engine
waxOn.on(hbs.handlebars); // enable wax-on for handlebars (for template inheritance)
waxOn.setLayoutPath("./views/layouts"); // inform wax-on where to find the layouts

app.use(
  express.urlencoded({
    extended: false, // for processing HTML forms usually it's false because
    // HTML forms are usually quite simple
  })
);

// routes
app.get("/", function (req, res) {
  res.send("add /calculator behind current url");
});

app.get('/calculator', function (req, res) {
    res.render('calculator');
});

app.post("/calculator", function (req, res) {
    let a = +req.body.a;
    let b = +req.body.b;

    let operation = req.body.operation;

    let result = 0;

    if (operation == "add") {
        result = a + b;
    } else if (operation == "minus") {
        result = a - b;
    } else if (operation == "multiply") {
        result = a * b;
    } else {
        result = a / b;
    }

    res.send(result.toString());
})

app.listen(3000, function () {
  console.log("server started");
});
