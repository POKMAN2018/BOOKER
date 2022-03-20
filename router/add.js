let User = require("../model/user_model")
let Book = require("../model/book_model")

module.exports.get = (req,res)=> {
	Book.findOneAndUpdate({_id:req.params.id},{$set:{status:true,user:req.session.user}},{new:true}).then(doc=> {
			User.findOneAndUpdate({email:req.session.email},{$addToSet:{store:doc.title}}).then(()=> {
				User.findOneAndUpdate({email:req.session.email},{$addToSet:{store_id:req.params.id}}).then(read=>{
					console.log("Book added!")
					res.redirect("/home")					
				})
				
	})

		})
	
	
	
}
module.exports.post = (req,res)=> {

}