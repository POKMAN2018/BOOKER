let User = require("../model/user_model")
let Book = require("../model/book_model")
let path = require("path")
let fs 	 = require("fs")
module.exports.get = (req,res)=> {

	 User.findOne({email:req.session.email}).then(doc=> {
		 Book.find({}).then(book=> {
			res.render("home",{info:doc,name:doc.username,doc:book,err:"",today:new Date().getDate() + "/" + (new Date().getMonth()+1) + "/" + new Date().getFullYear()})
		})
		
	})
	
}
module.exports.post = (req,res)=> {
		try {
		if (req.files.pic == null || !req.body.title || !req.body.tag) {
			res.json({
				error:true,
				text:"Empty form"
			})
		}else{
			console.log(req.body.title,req.body.tag)
			let pic = req.files.pic
			req.session.random = Math.random()
			new Book({status:false,title:req.body.title,pic:req.session.random,auth:req.session.user,tag:req.body.tag,date:new Date().getDate() + "/" + (new Date().getMonth()+1) + "/" + new Date().getFullYear()}).save()
			pic.mv(path.join(__dirname,`/../public/images/${req.session.random}.jpeg`))
			res.redirect("/home")

		}
	}catch (err){
		res.json({
			error:true,
			text:"Empty form"
		})
	}
}

module.exports.put = (req,res)=> {
	req.session.profile = Math.random()
	let profile = req.files.profile

	profile.mv(path.join(__dirname,`/../public/profile/${req.session.profile}.jpeg`))

	User.findOne({email:req.session.email}).then(doc=> {
		if (doc.profile_path == "unknow") {
			console.log("FOUND ORIGINAL UNKNOW!")	
		}else{
			fs.unlink(path.join(__dirname,`/../public/profile/${doc.profile_path}.jpeg`),(err)=> {
				if (err) {
					console.log(err)
				}
				return;
			})
		}
		User.findOneAndUpdate({email:req.session.email},{$set:{profile_path:req.session.profile}},{new:true}).then(()=> {
			res.redirect("/home")
		})	
	})

	
	
}