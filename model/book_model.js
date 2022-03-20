let mongoose = require("../module/all_module").mongoose


let schema = new mongoose.Schema({
	pic:{
		type:String
	},
	title:{
		type:String
	},
	auth:{
		type:String
	},
	status:{
		type:Boolean
	},
	user:{
		type:String
	},
	tag:{
		type:String
	},
	comment:{
		type:Array
	},
	date:{
		type:String
	},
	view:{
		type:Number,
		default:0
	}
},{
	collection:"book"
})
module.exports = mongoose.model("book_data",schema)