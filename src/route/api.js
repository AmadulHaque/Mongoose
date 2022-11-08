const express =  require('express');
const Hello = require("../controllers/helloController");
const router = express.Router();



router.get('/hello-get',Hello.HelloGet);
router.post('/hello-post',Hello.HelloPost);
module.exports=router;