let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = async(req,res)=> {
	await Book.findOne({_id:req.params.id}).then(doc=> {
		Book.findOneAndUpdate({_id:req.params.id},{$set:{view:doc.view+1}},{new:true}).then(docer=> {
			res.render("view_book",{doc:doc,user:req.session.user,view:docer.view})
			console.log(doc)
		})
		
	})
	
	
}
module.exports.post = (req,res)=> {
	Book.findOneAndUpdate({_id:req.params.id},{$push:{comment:`${req.session.user} : ${req.body.comment}`}}).then(reader=> {
		res.redirect("/view_book/"+req.params.id)
	})
}