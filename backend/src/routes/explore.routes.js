const express = require('express') ; 
const getExplorePopularRepos = require('@controllers/explore.controllers');
const ensureAuthenticated  = require('@middlewares/ensureAuthenticated') ;

const router = express.Router() ; 


router.get("/repos/:language" ,ensureAuthenticated ,  getExplorePopularRepos)

module.exports = router ; 