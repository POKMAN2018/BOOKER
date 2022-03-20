module.exports.islogin = (req,res,next)=> {
	if (req.session.email) {
		res.redirect("/home")
	}else{
		next()
	}
}

module.exports.notlogin = (req,res,next)=> {
	//check if facebook login
	if (req.user != undefined) {
		req.session.email = req.user._json.email
		req.session.user = req.user._json.name
	}
	if (!req.session.email) {
		res.redirect("/login")
	}else{
		next()
	}
}