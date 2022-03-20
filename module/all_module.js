let express = require("express")
let session = require("express-session")({
	secret:["OVERLOAD","READER"],
	resave:false,
	saveUninitialized:true,
	name:"Hello world"
})
let methodOverride = require("method-override")
let fileUpload = require('express-fileupload');
let mongoose = require("mongoose")
mongoose.connect("mongodb+srv://pokman2018:lion4333@cluster0.0q5we.mongodb.net/BOOK?retryWrites=true&w=majority")

//passport
let passport = require("passport")
let facebookligee = require("passport-facebook").Strategy

//send out
module.exports.express = express
module.exports.session = session
module.exports.mongoose = mongoose
module.exports.fileUpload = fileUpload
module.exports.methodOverride = methodOverride
module.exports.passport = passport
module.exports.facebookligee = facebookligee