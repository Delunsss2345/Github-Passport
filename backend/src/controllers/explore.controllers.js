const exploreService = require("@services/explore.service") ; 

const getExplorePopularRepos = async (req , res) => {
    const {language} = req.params ; 
    const repos = await exploreService.explorePopularRepos(language) ; 
    res.success(200 , 'Successfully' , repos)
}

module.exports = getExplorePopularRepos ;