const userService = require('@services/user.service');

const getUserProfileAndRepos = async (req , res) => {
    const {username} = req.params ; 
    const {userProfile , repos} = await userService.getUserProfileAndRepos(username) ;
    res.success(200 , 'Successfully' , {userProfile , repos}) ;  
}

const likeProfile = async (req , res) => {
    const {username} = req.params ; 
    const authUserId = req.user._id.toString() ; 

    await userService.likeProfile(authUserId , username) ;
    res.success(200 , 'User Liked') ;  
}

const getLikes = async (req , res) => {
    const authUserId = req.user._id.toString() ; 
    const likeBy = await userService.getLikes(authUserId) ;
    res.success(200 , 'Successfully' , {likeBy}) ; 
}


module.exports = {getUserProfileAndRepos , likeProfile , getLikes}