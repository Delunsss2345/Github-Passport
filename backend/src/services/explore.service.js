const explorePopularRepos = async (language) => {
    const res = await fetch(`http://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10` , {
        headers : {
            authorization : `token ${process.env.GITHUB_TOKEN}`
        }
    })
    const data = await res.json(); //res không tự động json
    return data.items ; 
}

module.exports = {explorePopularRepos} ; 