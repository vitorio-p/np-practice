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
app.get("/fruits", function (req, res) {
  res.render("fruits");
});

app.post("/fruits", function (req, res) {
  let fruits = [];

  if (req.body.items) {
    if (Array.isArray(req.body.items)) {
      fruits = req.body.items;
    } else {
      fruits = [req.body.items];
    }
  }

  let cost = 0;

    /*
    Method 1

    let cost = 0;

    if (fruits.includes('apple')) {
        cost += 5;
    }
    if (fruits.includes('banana')) {
        cost += 7;
    }
    */

  let priceChart = {
    apple: 5,
    banana: 7,
  };

  for (let f of fruits) {
    cost += priceChart[f];
  }

  res.send(`fruits cost: $${cost}`);
});

app.listen(3000, function () {
  console.log("server started");
});
