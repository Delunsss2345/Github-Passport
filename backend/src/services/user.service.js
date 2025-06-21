const User = require('@models/user.model')
const ApiError = require('@utils/ApiError')
const getUserProfileAndRepos = async (username) => {
    const userRes = await fetch(`https://api.github.com/users/${username}` ,
    {
        headers : {
                authorization : `token ${process.env.GITHUB_TOKEN}`
            }
        }
    );
    const userProfile = await userRes.json();
    const repoRes = await fetch(userProfile.repos_url, {
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
    });

    const repos = await repoRes.json();
    return {userProfile , repos} ; 
}


const likeProfile = async (authUserId , username) => {
    
    const user = await User.findById(authUserId)
    const userToLike = await User.findOne({username}) 

    if(!userToLike) {
        throw new ApiError(404 , "User is not a member") ; 
    }

    if(user.likeProfiles.includes(userToLike.username)) {
        throw new ApiError(400 , "User already like ^^") ; 
    }

    userToLike.likeBy.push({
        username:user.username , 
        avatarUrl:user.avatarUrl ,
        likedDate : Date.now()
    }) ;

    user.likeProfiles.push(userToLike.username) ; 

    await Promise.all([userToLike.save() , user.save()]) ; 
}

const getLikes = async (authUserId) => {
    const user = await User.findById(authUserId) ; 
    return user.likeBy ;  
}

module.exports = {
    getUserProfileAndRepos , likeProfile , getLikes
};