const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

const app = express();

app.set("view engine", "hbs");
app.use(express.static("public"));

// setup waxOn
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

// routing
app.get("/", function(req, res){
    // res.send("yes, i'm here");
    res.render("contact-us")
});

app.get("/hello", function(req, res){
    // res.render("contact-us");
    res.render("hello", {
        "students": ["vito", "ken", "kai"]
        // "students": [] choose one to uncomment and see what changes
    });
})

app.listen(3000, function(){
    console.log("server is running")
})



