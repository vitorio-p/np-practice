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

let postings = [
  {
    id: 4001,
    title: "Old boardgame for sales",
    price: 11.5,
    payments: ["cod", "paynow"],
    type: "entertainment",
  },
  {
    id: 4002,
    title: "Second hand clothings",
    price: 25.0,
    payments: ["paynow"],
    type: "clothings",
  },
  {
    id: 4003,
    title: "Old LED TV",
    price: 250.0,
    payments: ["cod"],
    type: "electronic",
  },
];

// routes
app.get('', function(req,res){
    res.send('hello')
})

app.get("/postings", function (req, res) {
  let allItems = postings;
  res.render("postings", {
    allItems: allItems,
  });
});

app.get("/add-posting", function (req, res) {
    res.render("add-posting")
});

app.post('/add-posting', function (req, res) {
    let title = req.body.title;
    let price = req.body.price;
    let payments = req.body.payments;
    let selectedTags = [];

    if (req.body.tags) {
        if (Array.isArray(req.body.tags)) {
            selectedTags = req.body.tags;
        } else {
            selectedTags.push(req.body.tags);
        }
    }

    let newItem = {
        title: title,
        price: price,
        payments: payments,
        tags: selectedTags
    }

    postings.push(newItem);

    console.log(`new item is: ${newItem}`)

    res.redirect('/postings');
})

app.listen(3000, function () {
  console.log("server started");
});
