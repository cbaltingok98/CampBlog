# Camp Blog

### Finding campsites made easier

#### Camp Blog will help you discover new campsites that are discovered and reviewed by thousands so you don't have to.

In Camp Blog you can find and review campsites or can add new ones that no one been to except you! You can upload the beatufil picture you took for other users to see and review.

## How does it work

* Camp Blog uses `passport.js` so users can access to their accounts by their own user names and passwords.

* Camp Blog uses `mongoDB` to store campsite data, reviews and users data.

* Camp Blog uses `express.js` web application framework.

## Campsite Model
```javaScript
const mongoose = require("mongoose");

let campgroundSchema = new mongoose.Schema({
        name: String,
        image: String,
        description: String,
        comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
```
## Comment Model
```javaScript
const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
        text: String,
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
    }
});
```
## User Model
```javaScript
let mongoose = require("mongoose");

let passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);
```
