const express = require('express') ; 
const { getUserProfileAndRepos , likeProfile , getLikes } = require('@controllers/user.controllers');
const ensureAuthenticated  = require('@middlewares/ensureAuthenticated') ;
const router = express.Router() ; 


router.get("/profile/:username" , getUserProfileAndRepos) ;
router.get("/likes" , ensureAuthenticated , getLikes)
router.post("/like/:username" , ensureAuthenticated , likeProfile) ;


module.exports = router ; 