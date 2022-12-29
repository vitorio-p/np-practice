const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
const axios = require("axios");
const e = require("express");

require("handlebars-helpers")({
  handlebars: hbs,
});

const app = express();

app.set("view engine", "hbs");

wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

app.use(express.urlencoded({ extended: false }));

// LOCAL DB
let movieRecords = [];

// VIEW ALL

app.get("/", async function (req, res) {
  let config = {
    method: "GET",
    url: "https://movie-dce9.restdb.io/rest/movie",
    headers: {
      "x-api-key": "63ac3a7bf43a573dae0957c3",
    },
  };

  try {
    console.log("connecting to db");
    let response = await axios(config);
    console.log("connected to db");
    movieRecords = response.data;
    console.log(movieRecords);
    res.render("all-movie", {
      allMovies: response.data,
    });
  } catch (err) {
    console.log(err);
  }
});

// ADD
app.get("/add-movie", function (req, res) {
  res.render("add-movie");
});

app.post("/add-movie", async function (req, res) {
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

  axios({
    method: "POST",
    url: "https://movie-dce9.restdb.io/rest/movie",
    headers: {
      "x-api-key": "63ac3a7bf43a573dae0957c3",
    },
    data: newMovie,
  })
    .then(function (response) {
      console.log("movie added");
      res.redirect("/");
    })
    .catch(function (error) {
      console.log(error);
    });
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
  res.render("delete-movie", {
    movieRecord: movieRecord,
  });
});

app.post("/delete-movie/:delete_movie_id", function (req, res) {
  let movieRecord = movieRecords.find(function (record) {
    if (record.id == req.params.delete_movie_id) {
      return true;
    } else {
      return false;
    }
  });

  axios({
    method: "DELETE",
    url: `https://movie-dce9.restdb.io/rest/movie/${movieRecord._id}`,
    headers: {
      "x-api-key": "63ac3a7bf43a573dae0957c3",
    },
  })
    .then(function (response) {
      console.log("movie deleted");
      res.redirect("/");
    })
    .catch(function (error) {
      console.log(error);
    });
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
