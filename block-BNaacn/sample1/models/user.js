var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    favourites: [String] 
})

var user = module.exports( "User", userSchema );