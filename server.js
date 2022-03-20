//module
let app = require("./middleware").app
let passport = require("./model/facebook_login")

//router
//login
app.get("/login",require("./function/all_function").islogin,require("./router/login").get)
app.post("/login",require("./router/login").post)

//facebook login
app.get('/auth/facebook', passport.authenticate('facebook',{scope:["email"]}))
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/home',
                                      failureRedirect: '/login' }))

//register
app.get("/register",require("./function/all_function").islogin,require("./router/register").get)
app.post("/register",require("./router/register").post)

//home
app.get("/home",require("./function/all_function").notlogin,require("./router/home").get)
app.post("/home",require("./function/all_function").notlogin,require("./router/home").post)
app.put("/home",require("./function/all_function").notlogin,require("./router/home").put)

//all_book
app.get("/api/book",require("./router/all_book").get)

//view_book
app.get("/view_book/:id",require("./function/all_function").notlogin,require("./router/view_book").get)
app.post("/view_book/:id",require("./function/all_function").notlogin,require("./router/view_book").post)

//add to store
app.get("/add/:id",require("./function/all_function").notlogin,require("./router/add").get)
app.post("/add",require("./function/all_function").notlogin,require("./router/add").post)

//reading
app.get("/reading",require("./function/all_function").notlogin,require("./router/reading").get)
app.post("/reading",require("./function/all_function").notlogin,require("./router/reading").post)

//returning
app.get("/returning/:id",require("./function/all_function").notlogin,require("./router/returning").get)

//return_book
app.get("/return_book",require("./function/all_function").notlogin,require("./router/return_book").get)


//delete return_book
app.get("/del_book/:id",require("./function/all_function").notlogin,require("./router/del_book").get)


//my_book
app.get("/my_book",require("./function/all_function").notlogin,require("./router/my_book").get)

//del_my_book
app.get("/del_my_book/:id",require("./function/all_function").notlogin,require("./router/del_my_book").get)

//tag
app.get("/tag/:id",require("./function/all_function").notlogin,require("./router/tag").get)

//logout
app.get("/logout",require("./router/logout").get)

app.listen(3000,()=> {
	console.log("SERVER START AT PORT 3000")
})