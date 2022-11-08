const express =  require('express');
const  router = require('./src/route/api')
const app =new express();


// security middleware require
const rateLimit  = require('express-rate-limit')
const mongoSanitize  =require('express-mongo-sanitize');
const cors  =require('cors');
const helmet = require('helmet');
const hpp  =require('hpp');
const xss  =require('xss-clean');


// security middleware implement
app.use(mongoSanitize());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(xss());

// rateLimit
const limiter = rateLimit({
    windowMs: 3 * 60 * 1000, // 15 minutes
    max:10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);





app.use("/api/v1",router);

// unified  route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail", data:"Not found"});
});



module.exports =app;