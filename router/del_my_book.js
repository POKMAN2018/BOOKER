let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {
	Book.findOne({_id:req.params.id}).then(doc=> {
		if (req.session.user == doc.auth) {
			Book.findOneAndRemove({_id:req.params.id}).then(()=> {
				return res.redirect("/my_book")
			})
		}else{
			return res.redirect("/my_book")
		}
	})
	
	
}
module.exports.post = (req,res)=> {

}