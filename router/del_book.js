let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {
	Book.findOne({_id:req.params.id}).then(doc=> {
		User.findOneAndUpdate({email:req.session.email},{$pull:{return_book:doc.title}}).then(ss=> {
			User.findOneAndUpdate({email:req.session.email},{$pull:{return_book_id:doc._id}}).then(()=> {
				res.redirect("/return_book")
			})
		})
	})
	
	
}
module.exports.post = (req,res)=> {

}