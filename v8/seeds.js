const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");


let data = [
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2018/08/14/10/54/danxia-3605276_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget justo pretium, porttitor urna eu, tincidunt odio. Phasellus feugiat justo leo, non maximus arcu tincidunt a. Mauris finibus, nibh iaculis ultrices lobortis, lectus dolor placerat urna, a gravida mauris risus eu ante. Aenean arcu mauris, porttitor a auctor sit amet, euismod vitae ipsum. Nulla auctor, sem vitae volutpat viverra, odio magna molestie sem, id vulputate lorem velit vel ex. Sed posuere, purus maximus hendrerit pretium, lorem lacus lacinia purus, venenatis feugiat nulla orci vel risus. Curabitur dignissim tristique tellus quis convallis. Pellentesque vel turpis ultrices, vestibulum elit at, porta risus. Quisque fringilla commodo nibh, a scelerisque nisi ultrices et."
    },
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2019/08/02/18/35/wind-power-4380274_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget justo pretium, porttitor urna eu, tincidunt odio. Phasellus feugiat justo leo, non maximus arcu tincidunt a. Mauris finibus, nibh iaculis ultrices lobortis, lectus dolor placerat urna, a gravida mauris risus eu ante. Aenean arcu mauris, porttitor a auctor sit amet, euismod vitae ipsum. Nulla auctor, sem vitae volutpat viverra, odio magna molestie sem, id vulputate lorem velit vel ex. Sed posuere, purus maximus hendrerit pretium, lorem lacus lacinia purus, venenatis feugiat nulla orci vel risus. Curabitur dignissim tristique tellus quis convallis. Pellentesque vel turpis ultrices, vestibulum elit at, porta risus. Quisque fringilla commodo nibh, a scelerisque nisi ultrices et."
    },
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2019/08/02/12/51/lisbon-4379656_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget justo pretium, porttitor urna eu, tincidunt odio. Phasellus feugiat justo leo, non maximus arcu tincidunt a. Mauris finibus, nibh iaculis ultrices lobortis, lectus dolor placerat urna, a gravida mauris risus eu ante. Aenean arcu mauris, porttitor a auctor sit amet, euismod vitae ipsum. Nulla auctor, sem vitae volutpat viverra, odio magna molestie sem, id vulputate lorem velit vel ex. Sed posuere, purus maximus hendrerit pretium, lorem lacus lacinia purus, venenatis feugiat nulla orci vel risus. Curabitur dignissim tristique tellus quis convallis. Pellentesque vel turpis ultrices, vestibulum elit at, porta risus. Quisque fringilla commodo nibh, a scelerisque nisi ultrices et."
    }
];

function seedDB() {

    //Remove all Comments
    Comment.deleteMany({}, function(err) {
        if(err){
            console.log(err);
        } else {
            console.log("Comments Removed");
        }
    })
    //Remove all campgrounds
    Campground.deleteMany({}, function (err) {
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