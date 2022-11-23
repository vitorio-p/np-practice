const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

require("handlebars-helpers")({
  handlebars: hbs,
});

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

let foodRecords = [
  {
    id: 1,
    foodName: "Chicken Rice",
    calories: 400,
    meal: "lunch",
    tags: ["chinese"],
  },
  {
    id: 2,
    foodName: "Truffle Pizza",
    calories: 800,
    meal: "lunch",
    tags: ["italian", "fancy"],
  },
];

// CRUD

app.get("/all-food", function (req, res) {
  let allFood = foodRecords;
  res.render("all-food", {
    allFood: allFood,
  });
});

app.get("/add-food", function (req, res) {
  res.render("add-food");
});

app.post("/add-food", function (req, res) {
  let foodName = req.body.foodName;
  let calories = req.body.calories;
  let meal = req.body.meal;

  let selectedTags = [];
  if (req.body.tags) {
    if (Array.isArray(req.body.tags)) {
      selectedTags = req.body.tags;
    } else {
      selectedTags = [req.body.tags];
    }
  }

  let newFood = {
    id: Math.floor(Math.random() * 10000 + 1),
    foodName: foodName,
    calories: calories,
    meal: meal,
    tags: selectedTags,
  };

  // not used with the other setup
  let tempRecord = new FoodRecord(
    Math.floor(Math.random() * 10000 + 1),
    foodName,
    calories,
    meal,
    selectedTags
  );

  // foodRecords.push(tempRecord);
  foodRecords.push(newFood);

  res.redirect("/all-food");
});

function FoodRecord(id, foodName, calorie, meal, tags) {
  this.id = id;
  this.foodName = foodName;
  this.calorie = calorie;
  this.meal = meal;
  this.tags = tags;
}

// Update
app.get("/update-food/:food_record_id", function (req, res) {
  let id = req.params.food_record_id;
  let tempRecord = null;
  for (let record of foodRecords) {
    foodRecord = record;
    if (record.id == id) {
      tempRecord = record;
      break;
    }
  }
  res.render("update-food", {
    foodRecord: tempRecord,
  });
});

app.post("/update-food/:food-record_id", function (req, res) {
  let selectedTags = [];

  if (Array.isArray(req.body.tags)) {
    selectedTags = req.body.tags;
  } else {
    selectedTags.push(req.body.tags);
  }

  let tempRecord = {
    id: req.body.food_record_id,
    foodName: req.body.foodName,
    calories: req.body.calories,
    meal: req.body.meal,
    tags: selectedTags,
  };

  let index = -1;

  for (let i = 0; i < foodRecords.length; i++) {
    if (foodRecords[i].id == req.params.food_record_id) {
      index = i;
      break;
    }
  }

  foodRecords[index] = tempRecords;

  res.redirect("/all-food");
});

// DELETE
app.get("/delete-food/:delete_record_id", function (req, res) {
  let foodRecord = foodRecords.find(function (record) {
    if (record.id == req.params.delete_record_id) {
      return true; // if found, it will return the foodRecord with the same ID
    } else {
      return false;
    }
  });
  res.render("delete-food", {
    foodRecord: foodRecord,
  });
});

app.post("/delete-food/:delete_record_id", function (req, res) {
  let indexToDelete = foodRecords.findIndex(function (record) {
    if (record.id == req.params.delete_record_id) {
      return true;
    } else {
      return false;
    }
  });

  foodRecords.splice(indexToDelete, 1);
  res.redirect("/all-food");
});

// routes
app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(3000, function () {
  console.log("server started");
});
