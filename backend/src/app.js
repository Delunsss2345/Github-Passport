//Lib
const express = require('express') ; 
const session = require('express-session') ;
const cors = require('cors') 
const passport = require('passport') ; 
require('./passport/github.auth') ; 

//path 
const path = require('path') ; 
//Database 
const getConnectDB = require('@configs/database') ; 
getConnectDB() ; 

// Middlewares 
const responseEnhancer = require('@middlewares/responseEnhancer');
const errorHandler = require('@middlewares/errorHandler');

//Route
const userRoutes = require('@routes/user.routes') ;
const exploreRoutes = require('@routes/explore.routes') ;
const authRoutes = require('@routes/auth.routes') ;

const app = express() ; 
app.use(express.json()) ;
app.use(session({secret: 'keyB0or ca' , resave: false , saveUninitialized : false})) ; 
app.use(passport.initialize()) ;
app.use(passport.session()) ; 
app.use(cors()) ; 

app.use(responseEnhancer) ;

app.use("/api/user" , userRoutes) ; 
app.use("/api/explore" , exploreRoutes) ; 
app.use("/api/auth" , authRoutes) ; 

const distPath = path.resolve(__dirname, '..', 'dist');


app.use(express.static(distPath));
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.use(errorHandler) ;

module.exports = app ; 