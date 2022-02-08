var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    sports: [String]
} );

var User = mongoose.model( "User", userSchema );

module.exports = User;