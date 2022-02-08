var mongoose = require("mongoose");

var Schema = mongoose.schema;

var articleSchema = new Schema({
    name: String,
    age: Number
});