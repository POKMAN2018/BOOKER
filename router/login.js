let User = require("../model/user_model")


module.exports.get = (req,res)=> {
	res.render("login",{err:""})
}
module.exports.post = async (req,res)=> {


	if (!req.body.email || !req.body.password) {
		res.render("login",{err:"กรุณากรอกข้อมูลให้ครบถ้วน"})
	}else{
	await User.findOne({email:req.body.email,password:req.body.password}).then(doc=> {
		console.log(doc)
		if (doc == null) {
			res.render("login",{err:"ไม่พบอีเมลล์ผู้ใช้หรือรหัสผ่าน"})
		}else{
			req.session.email = doc.email
			req.session.user = doc.username
			if (!req.body.remem) {
				console.log("set age")
				req.session.cookie.maxAge = 1000
				req.session.cookie.expires = 1000
			}else{
				console.log("not set")
			}
			res.redirect("/home")
		}
	})
	}

}