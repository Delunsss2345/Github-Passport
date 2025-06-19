
const responseEnhancer = (req , res , next) => {
    res.success = (statusCode , message , data = null) => {
        return res.status(statusCode).json({success : true , message , data}) ;
    }
    next();
}

module.exports = responseEnhancer ; 