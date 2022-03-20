let express = require("./module/all_module").express
let app = express()
let path = require("path")
let fileUpload = require('./module/all_module').fileUpload
let passport = require("./module/all_module").passport

//main middleware
app.set("views",path.join(__dirname,"view"))
app.set("view engine","ejs")
app.use(require("./module/all_module").methodOverride('_method'))
app.use(fileUpload({
    createParentPath: true
}));
app.use(require("./module/all_module").session)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//send out
module.exports.app = app
module.exports.passport = passport

