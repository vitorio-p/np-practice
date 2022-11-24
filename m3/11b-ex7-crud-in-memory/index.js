// const means never changes - short for constant
const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

// creates a new instance of an express application
// the `app` variable shouldn't be changed
const app = express();

// setup the view engine
app.set("view engine", "hbs");

// setup wax on so that it will works with hbs
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// require in 188 handlebar helpers
require("handlebars-helpers")({
  handlebars: hbs.handlebars,
});

// CREATE A GLOBAL ARRAY TO ACT AS IN THE IN-MEMORY DATABASE
// the global array foodRecords store all the food entries that the user has typed in
// using the array as a data store is temporary
// when the server restarts (i.e nodemon restarts the server) all data will be gone
let foodRecords = [
  {
    id: Math.floor(Math.random() * 10000) + 1,
    foodName: "Chicken Rice",
    calories: 500,
    meal: "lunch",
    tags: ["organic", "less-oil"],
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    foodName: "Boston Clam Chowder",
    calories: 750,
    meal: "dinner",
    tags: ["home-cooked"],
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    foodName: "Tuna Sandwich",
    calories: 600,
    meal: "snack",
    tags: ["gluten-free"],
  },
];

// ROUTES HERE

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

// END ROUTES

app.get('/', function(req, res) {
    res.send('hello, world. add /all-food behind current url')
})

app.listen(3000, () => {
  console.log("Server started");
});
