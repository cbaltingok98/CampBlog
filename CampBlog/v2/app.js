const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/yelp_camp', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));;
app.set("view engine", "ejs");

//SCHEMA SETUP

const Schema = mongoose.Schema;

let campgroundSchema = new Schema({
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image: "",
//     description: "This is a huge ranite hill, no bathrooms. No water. Beautiful."
// }, function (err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Created");
//         console.log(campground);
//     }
// });


app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    //Get all the campgrounds from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { campgrounds: allCampgrounds });
        }
    });

});

app.post("/campgrounds", function (req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let newCampground = { name: name, image: image, description: description };
    // Create a new campground and save to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });


});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function (req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", { campground: foundCampground });
        }
    });


});

app.listen(3000, '127.0.0.1', function () {
    console.log("The YelpCamp Server Has Started!");
});