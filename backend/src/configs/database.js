const mongoose = require('mongoose') ; 

const getConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI) ; 
        console.log(conn.connection.name) ;
    }
    catch (error) {
        console.log('Connection Database Failed') ; 
    }
}

module.exports = getConnectDB ;