var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user");

mongoose.connect( 'mongodb://localhost/sample', (err)=>{
    console.log( err ? err : "connected to database" );
});

var app = express();

app.use( express.json() );

app.post( '/user', ( req, res, next )=>{
    console.log(res.body);
    User.create( res.body, ( err, user ) =>{
        if ( err ) {
            next(err);
        } else {
            res.send(`user is created ${user}`)
        }
    } );
} )

app.get( '/user', ( req, res )=>{
    User.find({}, (err,user)=>{
        console.log(err);
        res.json( { user: user } );
    });
} );


app.get( '/user/:id', ( req, res )=>{
    var id = req.params.id;
    User.findById( id, (err,user)=>{
        console.log(err);
        res.json(user);
    })
} )

app.put( '/user/:id', ( req, res )=>{
    var id = req.params.id;
    User.findByIdAndUpdate(id, res.body, {new: true}, (err,userUpdated)=>{
        console.log(err);
        res.json(userUpdated);
    })
} )

app.delete( '/user/:id', ( req, res )=>{
    User.findByIdAndDelete( req.params.id, (err,deleted)=>{
        console.log(err);
        res.send(`deleted ${deleted.name}`);
    } )
} )

app.listen( 3000, ()=>{
    console.log("server listening port on 3k");
} );
