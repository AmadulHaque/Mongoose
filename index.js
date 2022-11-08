const app = require('./app');
const dotenv = require('dotenv');
const process = require("process");
dotenv.config({path:"./config.env"});




app.listen(process.env.RUNNING_PORT,function () {
    console.log(process.env.RUNNING_PORT);
})




