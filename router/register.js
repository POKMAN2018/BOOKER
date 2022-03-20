let User = require("../model/user_model")


module.exports.get = (req,res)=> {
	res.render("register",{err:""})
}
module.exports.post = async(req,res)=> {
	//check if form empty
	if (!req.body.email || !req.body.username || !req.body.password) {
		res.render("register",{err:"กรุณากรอกข้อมูลให้ครบถ้วน"})
	}else if((req.body.password).length < 6) {
		res.render("register",{err:"รหัสต้องมากกว่า 6 ตัวอักษร"})
	}else{
		await new User({email:req.body.email,username:req.body.username,password:req.body.password}).save()		
		res.redirect("/login")
	}
}