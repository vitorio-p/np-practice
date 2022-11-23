const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
const axios = require("axios");

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
app.get("/", async function (req, res) {
  let data = [];

  let config = {
    method: "get",
    url: "",
    headers: {
      "x-api-key": "",
    },
  };

  try {
    let response = await axios(config);
    data = JSON.stringify(response.data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  res.send("retrieved!");
});

app.listen(3000, function () {
  console.log("server started");
});
