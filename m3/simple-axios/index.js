const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
const axios = require("axios");

let app = express();
app.set("view engine", "hbs");
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

app.use(
  express.urlencoded({
    extended: false,
  })
);

// local db
// TODO implement axios and db
/*
let movieRecords = [
  {
    id: 1,
    movieTitle: "The Shawshank Redemption",
    genre: "Drama",
    duration: 162,
    rating: 9.2,
  },
  {
    id: 2,
    movieTitle: "The Godfather",
    genre: "Drama",
    duration: 175,
    rating: 9.2,
  },
];
*/

// update db with online
let movieRecords = [];

let config = {
  method: "GET",
  url: "https://movie-dce9.restdb.io/rest/movie",
  headers: {
    "x-api-key": "638471d3c890f30a8fd1f5da",
  },
};

try {
  let response = axios(config);
  movieRecords = JSON.stringify(response.data);
  console.log(movieRecords);
} catch (error) {
  console.log(error);
}

// routes
app.get("/", function (req, res) {
  let allMovies = movieRecords;
  res.render("home", {
    allMovies: allMovies,
  });
});

app.get("/add", function (req, res) {
  res.render("add");
});

app.post("/add", function (req, res) {
  let movieTitle = req.body.movieTitle;
  let genre = req.body.genre;
  let duration = req.body.duration;
  let rating = req.body.rating;

  let newMovie = {
    id: Math.floor(Math.random() * 10000 + 1),
    movieTitle: movieTitle,
    genre: genre,
    duration: duration,
    rating: rating,
  };

  movieRecords.push(newMovie);

  res.redirect("/");
});

app.get("/edit/:movie_record_id", function (req, res) {
  let id = req.params.movie_record_id;
  let tempRecord = null;
  for (let record of movieRecords) {
    movieRecord = record;
    if (record.id == id) {
      tempRecord = record;
      break;
    }
  }
  res.render("edit", {
    movieRecord: tempRecord,
  });
});

app.post("/edit/:movie_record_id", function (req, res) {
  let tempRecord = {
    movieTitle: req.body.movieTitle,
    genre: req.body.genre,
    duration: req.body.duration,
    rating: req.body.rating,
  };

  let index = -1;

  for (let i = 0; i < movieRecords.length; i++) {
    if (movieRecords[i].id == req.params.movie_record_id) {
      index = i;
      break;
    }
  }

  movieRecords[index] = tempRecord;

  res.redirect("/");
});

app.get("/delete/:movie_record_id", function (req, res) {
  let movieRecord = movieRecords.find(function (record) {
    if (record.id == req.params.movie_record_id) {
      return true;
    } else {
      return false;
    }
  });
  res.render("delete", {
    movieRecord: movieRecord,
  });
});

app.post("/delete/:movie_record_id", function (req, res) {
  let indexToDelete = movieRecords.findIndex(function (record) {
    if (record.id == req.params.movie_record_id) {
      return true;
    } else {
      return false;
    }
  });

  movieRecords.splice(indexToDelete, 1);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server started");
});
