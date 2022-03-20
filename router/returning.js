let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {

	Book.findOneAndUpdate({_id:req.params.id},{$set:{status:false}}).then(doc=> {
		User.findOneAndUpdate({email:req.session.email},{$pull:{store:doc.title}}).then(docer=> {
			User.findOneAndUpdate({email:req.session.email},{$pull:{store_id:req.params.id}}).then(oo=> {
				User.findOneAndUpdate({email:req.session.email},{$push:{return_book:doc.title}}).then(pp=> {
					User.findOneAndUpdate({email:req.session.email},{$push:{return_book_id:doc._id}}).then(jj=> {
						res.redirect("/reading")
					})
				})
			})
		})
	})
	  
	
}
module.exports.post = (req,res)=> {

}