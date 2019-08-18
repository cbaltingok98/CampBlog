const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");


let data = [
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2018/08/14/10/54/danxia-3605276_960_720.jpg",
        description: "blah blah blah"
    },
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2019/08/02/18/35/wind-power-4380274_960_720.jpg",
        description: "blah blah blah"
    },
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2019/08/02/12/51/lisbon-4379656_960_720.jpg",
        description: "blah blah blah"
    }
];


function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");

        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but i wish there was internet",
                            author: "Homer"
                        }, function (err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new");
                            }

                        });
                }
            });
        });
    });
    //Add a few campground


    //Add a few comment
}

module.exports = seedDB;