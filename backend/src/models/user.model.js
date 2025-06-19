const mongoose = require('mongoose') ;
const userSchema = new mongoose.Schema({
    username : {
        type:String , 
        required:true ,
        unique:true 
    } ,
    name : {
        type:String , 
        default: "" 
    } ,
    profileUrl : {
        type:String , 
        required:true
    },
    avatarUrl:{
        type:String 
    } ,
    likeProfiles: {
        type:[String] , 
        default : []
    } , 
    likeBy : [
        {
            username : {
                type :String,
                required : true 
            } ,
            avatarUrl : {
                type:String 
            } ,
            likedDate: {
                type:Date,
                default:Date.now
            }
        }
    ]
}, {timestamps : true}) 


const User = mongoose.model('User', userSchema);

module.exports = User  ;