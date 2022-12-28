const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

require("handlebars-helpers")({
  handlebars: hbs,
});

const app = express();

app.set("view engine", "hbs");

wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

app.use(express.urlencoded({ extended: false }));

/*
let movieRecords = [
  {
    id: 1,
    name: "Knives Out",
    genre: "Mystery & thriller/Comedy",
    year: 2019,
    duration: 130,
    score: 97,
  },
  {
    id: 2,
    name: "Violent Night",
    genre: "Holiday/Action",
    year: 2022,
    duration: 101,
    score: 73,
  },
  {
    id: 3,
    name: "Avatar",
    genre: "Sci-fi/Adventure",
    year: 2009,
    duration: 155,
    score: 82,
  },
];
*/

// VIEW ALL
app.get("/", async function (req, res) {
  let allMovies = [];

  let config = {
    method: "GET",
    url: "",
    headers: {
      "x-api-key": "",
    },
  };

  try {
    let response = await axios(config);
    allMovies = JSON.stringify(res.data);
    res.render("all-movie", {
      allMovies: allMovies,
    });
  } catch (err) {
    console.log(err);
  }
});

// ADD
app.get("/add-movie", function (req, res) {
  res.render("add-movie");
});

app.post("/add-movie", function (req, res) {
  let name = req.body.name;
  let genre = req.body.genre;
  let year = req.body.year;
  let duration = req.body.duration;
  let score = req.body.score;

  let newMovie = {
    id: Math.floor(Math.random() * 10000 + 1),
    name: name,
    genre: genre,
    year: year,
    duration: duration,
    score: score,
  };

  movieRecords.push(newMovie);
  res.redirect("/");
});

// DELETE
app.get("/delete-movie/:delete_movie_id", function (req, res) {
  let movieRecord = movieRecords.find(function (record) {
    if (record.id == req.params.delete_movie_id) {
      return true;
    } else {
      return false;
    }
  });
  console.log(movieRecord);
  res.render("delete-movie", {
    movieRecord: movieRecord,
  });
});

app.post("/delete-movie/:delete_movie_id", function (req, res) {
  let indexToDelete = movieRecords.findIndex(function (record) {
    if (record.id == req.params.delete_movie_id) {
      return true;
    } else {
      return false;
    }
  });

  console.log(indexToDelete);

  movieRecords.splice(indexToDelete, 1);
  res.redirect("/");
});

// EDIT
app.get("/edit-movie/:edit_movie_id", function (req, res) {
  let movieRecord = movieRecords.find(function (record) {
    if (record.id == req.params.edit_movie_id) {
      return true;
    } else {
      return false;
    }
  });
  res.render("edit-movie", {
    movieRecord: movieRecord,
  });
});

app.post("/edit-movie/:edit_movie_id", function (req, res) {
  let editedMovie = {
    id: +req.params.edit_movie_id,
    name: req.body.name,
    genre: req.body.genre,
    year: req.body.year,
    duration: req.body.duration,
    score: req.body.score,
  };

  let indexToEdit = movieRecords.findIndex(function (record) {
    if (record.id == req.params.edit_movie_id) {
      return true;
    } else {
      return false;
    }
  });

  movieRecords[indexToEdit] = editedMovie;

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server started");
});
