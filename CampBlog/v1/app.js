const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

today = mm + '/' + dd + '/' + yyyy;

app.use(bodyParser.urlencoded({ extended: true }));;
app.set("view engine", "ejs");

let campgrounds = [
    { name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2019/07/26/10/04/city-4364408_960_720.jpg", date: today, mm: mm, dd: dd, yyyy: yyyy },
    { name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732b7ad79e4cc15a_340.jpg", date: today, mm: mm, dd: dd, yyyy: yyyy },
    { name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b7ad79e4cc15a_340.jpg", date: today, mm: mm, dd: dd, yyyy: yyyy },
    { name: "Salmon Creek", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732b7ad79e4cc15a_340.jpg", date: today, mm: mm, dd: dd, yyyy: yyyy },
    { name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732b7ad79e4cc15a_340.jpg", date: today, mm: mm, dd: dd, yyyy: yyyy },
    { name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b7ad79e4cc15a_340.jpg", date: today, mm: mm, dd: dd, yyyy: yyyy }
]


//document.write(today);


app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function (req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = { name: name, image: image, date: today, mm: mm, dd: dd, yyyy: yyyy };
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.listen(3000, '127.0.0.1', function () {
    console.log("The YelpCamp Server Has Started!");
});