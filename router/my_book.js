let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {
	Book.find({auth:req.session.user}).then(doc=> {
		res.render("my_book",{doc:doc})
	})
	
}
module.exports.post = (req,res)=> {

}