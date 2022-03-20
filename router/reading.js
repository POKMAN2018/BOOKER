let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {

	User.findOne({email:req.session.email}).then(doc=> {
		
		res.render("reading",{doc:doc.store,store_id:doc.store_id})
	})
	
	
}
module.exports.post = (req,res)=> {

}