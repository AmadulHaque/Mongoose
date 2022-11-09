const TeacherModel = require('../models/TeacherModel');
exports.InsertTeacher =(req,res)=> {

    let reqBody = req.body;
    TeacherModel.create(reqBody,(err,data)=>{
        if (err){
            res.status('400').json({
                status:'fail',
                message:err,
            });
        }else {
            res.status('201').json({
                status:"success",
                message:data,
            });
        }
    })

}
exports.ReadTeacher = (req,res) =>{
    let query = {};
    let item = 'Name Position Salary'
    TeacherModel.find(query,item,function (error,data){
        if (error){
            res.status('400').json({
                status:"error",
                message:error,
            });
        }else{
            res.status('200').json({
                status:"success",
                message:data,
            });
        }
    })
}