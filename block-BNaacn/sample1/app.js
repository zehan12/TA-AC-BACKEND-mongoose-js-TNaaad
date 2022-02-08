var mongoose = require("mongoose");
var express = require("express");
var app = express();

mongoose.connect( "mongodb://localhost/sample1", (err)=>{
    console.log("connected to database");
} );

app.listen( 3000, ()=>{
    console.log("server listening on port 3k");
} );