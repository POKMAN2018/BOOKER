let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {
	Book.find({tag:req.params.id}).then(doc=> {
		res.render("tag",{doc:doc,tag:req.params.id})
	})
	
	
}
module.exports.post = (req,res)=> {

}