const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
const { check, validationResult } = require("express-validator");

let app = express();
app.set("view engine", "hbs");
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

app.use(
  express.urlencoded({
    extended: false,
  })
);

let itemRecords = [
  {
    id: 1,
    itemName: "iPhone",
    email: "vito@fp.com",
    location: "Taxi",
    properties: ["Expensive", "Branded", "Small"],
  },
  {
    id: 2,
    itemName: "Brown bag",
    email: "ken@fp.com",
    location: "MRT",
    properties: ["Plain"],
  },
];

// client-side validation

/*
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  */

// routes
app.get("/", function (req, res) {
  let allItems = itemRecords;
  res.render("home", {
    allItems: allItems,
  });
});

app.get("/add-item", function (req, res) {
  res.render("add-item");
});

// issues with express-validator
app.post(
  "/add-item",
  check("itemName").isLength({ min: 3, max: 200 }),
  check("email").isEmail(),
  check("location").not().isEmpty(),
  function (req, res) {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      console.log(err.mapped());
    } else {
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
      }

      if (properties.length == 0) {
        throw "No properties detected. Please return to the previous page.";
      }
      else if (properties.length > 3) {
        throw "Too many properties. Please return to the previous page.";
      }

      let newItem = {
        id: Math.floor(Math.random() * 10000 + 1),
        itemName: itemName,
        email: email,
        location: location,
        properties: properties,
      };

      itemRecords.push(newItem);

      res.redirect("/");
    }
  }
);

app.listen(3000, function () {
  console.log("server started");
});
