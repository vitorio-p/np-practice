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
  res.send("hello world");
});

app.get("/bmi", function (req, res) {
  res.render("bmi");
});

app.post("/bmi", function (req, res) {
  let height = req.body.height;
  let weight = req.body.weight;

  let bmi = 0;
  if (height && weight) {
    bmi = weight / height ** 2;
  }

  res.render("bmi-result", {
    bmi: bmi,
  });
});

app.listen(3000, function () {
  console.log("server started");
});
