const passport = require('passport') ;
const dotenv = require('dotenv') ; 
dotenv.config() ; 
const User = require('@models/user.model') ; 
const GitHubStrategy = require('passport-github2').Strategy;
passport.serializeUser(function(user , done) {
    done(null , user) ; 
})

passport.deserializeUser(function(obj , done) {
    done(null , obj) ; 
})


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/api/auth/github/callback"
  },
    //Hàm này sẽ nhận user nếu đăng nhập 
   async function(accessToken, refreshToken, profile, done) {
    const user = await User.findOne({username: profile.username}) ; 
    //Đăng ký
    if(!user) {
        const newUser = new User(
            {
                name : profile.displayName, 
                username:profile.username , 
                profileUrl:profile.profileUrl , 
                avatarUrl:profile.photos[0].value,
                likedProfiles: [] , 
                likedBy : []
            }
        ) 
        await newUser.save() ; 
        done(null ,newUser)
    } else done(null ,user) //Dăng nhập 
  }
));

