const express =  require('express');
const Hello = require("../controllers/helloController");
const StudentController = require("../controllers/studentController");
const TeacherController = require("../controllers/teacherController");
const router = express.Router();


router.get('/hello-get',Hello.HelloGet);
router.post('/hello-post',Hello.HelloPost);



/// mongoose data insert
router.post('/dataInsert',StudentController.InsertData);
/// mongoose data get
router.get('/student',StudentController.ReadStudent);


/// mongoose data insert Teacher
router.post('/insert-teacher',TeacherController.InsertTeacher);
/// mongoose data get
router.get('/teacher',TeacherController.ReadTeacher);


module.exports=router;