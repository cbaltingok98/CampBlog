let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Admin", AdminSchema);