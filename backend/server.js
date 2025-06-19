const dotenv = require('dotenv') ;
dotenv.config() ; 
require('module-alias/register');

const app = require('./src/app');
const port = process.env.PORT || 5000; 





app.listen(port , () => {
    console.log(`Listen http://localhost:${port}`) ; 
})