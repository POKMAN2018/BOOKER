let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {
	User.findOne({email:req.session.email}).then(doc=> {
		res.render("return_book",{doc:doc.return_book,docs:doc.return_book_id})
	})
	
	
}
module.exports.post = (req,res)=> {
	
}