let mongoose = require("../module/all_module").mongoose

let schema = new mongoose.Schema({
	email:{
		type:String
	},
	username:{
		type:String
	},
	password:{
		type:String
	},
	store:{
		type:Array
	},
	return_book:{
		type:Array
	},
	store_id:{
		type:Array
	},
	return_book_id:{
		type:Array
	},
	like:{
		type:Array
	},
	like_id:{
		type:Array
	},
	like_status:{
		type:Array
	},
	profile_path:{
		type:String,
		default:"unknow"
	},
	face_id:{
		type:String,
		default:"none"
	}

},{
	collection:"user"
})
module.exports = mongoose.model("user_data",schema)