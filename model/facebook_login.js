let passport = require("../middleware").passport
let facebookligee = require("../module/all_module").facebookligee
let User = require("./user_model")

passport.serializeUser(function(user, done) {
  done(null, user) //อยากส่งอะไรไปเก็บใน session
})
passport.deserializeUser(function(obj, done) {
  done(null, obj) //เอาของที่เก็บใน session มาใช้ต่อ
})

passport.use(new facebookligee({
	clientID: "386395479923098",
    clientSecret: "b5c7c8307575ac3d734c0270a7e6ed07",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'emails']
},
function(accessToken, refreshToken, profile, done) {
    //ส่วนนี้จะเอาข้อมูลที่ได้จาก facebook ไปทำอะไรต่อก็ได้
    User.findOne({email:profile._json.email}).then(doc=> {
      if (doc == null) {
        new User({face_id:profile.id,email:profile._json.email,username:profile._json.name,profile_path:profile._json.picture.data.url}).save()
        done(null, profile)//เสร็จแล้วให้เรียกฟังก์ชั่นนี้
      }else{
        console.log(doc)
        done(null, profile)//เสร็จแล้วให้เรียกฟังก์ชั่นนี้
      }
    })
     
  }
 ))

module.exports = passport