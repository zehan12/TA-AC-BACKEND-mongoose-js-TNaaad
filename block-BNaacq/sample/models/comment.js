var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var commentSchema = new Schema({
    content: String,
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
}, { timestamps: true });


var Comment = mongoose.model( "Comment", commentSchema );
module.exports = Comment;