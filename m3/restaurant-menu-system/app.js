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

let foodItems = [
  { "id": 1, "foodName": "Chicken Rice", "foodPrice": 4 },
  { "id": 2, "foodName": "Nasi Lemak", "foodPrice": 3 },
];

// routes
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/add-item", function (req, res) {
  res.render("add-item");
});

app.get("/manage-item", function (req, res) {
  res.render("manage-item", {
    'allFood': foodItems
  });
});

app.get("/update-item/:id", function (req, res) {
  let id = req.params.id;

  // setup a null object as our base
  let foodRecord = null;

  // perform a linear search and find the item that matches search
  for (let record of foodItems) {
    if (id == record.id) {
      foodRecord = record;
      break;
    }
  }

  res.render("update-item", {
    "foodRecord": foodRecord
  });
});

app.listen(3000, function () {
  console.log("server started");
});
