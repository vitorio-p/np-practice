const express = require("express");
const hbs = require("hbs");

const myModule = require("./my-module");
console.log(myModule.heading);

const app = express();

// setup view engine with hbs
app.set("view engine", "hbs");

// static files are html, css, js, movies, imgaes
app.use(express.static("public"));
// localhost:3000/<static files>

// attach listener to express
// express won't quit until forced to or giant error
app.get("/", function(req, res){
    console.log("all is well"); // just to check if all's g
    // res.send("all's g");

    // res.render(<hbs file>, {<objects>});
    res.render("index", {
        "country": "qatar",
        "student": [1, 2, 3]
    });
});

app.get("/hello/:firstName", function(req, res){
    let firstName = req.params.firstName;
    res.render("hello", {
        "firstX": firstName
    })
})

// only when a post req is sent over
app.post("/", function(req, res){
    console.log("receiving something");
})

app.listen(3000, function(){
    console.log("server is running");
})