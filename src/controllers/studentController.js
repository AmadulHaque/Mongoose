const studentModal = require('../models/StudentModel');
exports.InsertData = (req,res)=> {
    let reqBody = req.body;
    studentModal.create(reqBody,(err,data)=>{
        if (err){
            res.status('400').json({
                status:"fail",
                data:err,
            });
        }else {
            res.status('201').json({
                status:"success",
                data:data,
            });
        }
    })
}

exports.ReadStudent = (req,res) =>{
    let query = {};
    let item ='Name Roll Class';
    studentModal.find(query,item,function (err,data){
        if (err){
            res.status('400').json({
                status:"fail",
                data:err,
            });
        }else {
            res.status('200').json({
                status:"success",
                data:data,
            });
        }
    });
}


exports.UpdateStudent =(req,res)=>{
    let id = req.params.id;
    let query = { _id:id };
    let reqBody = req.body;
    studentModal.updateOne(query,reqBody,(err,data)=>{
        if (err){
            res.status('401').json({
                status:"error",
                data:err,
            });
        }else{
            res.status('200').json({
                status:"success",
                data:data,
            });
        }
    })
}

exports.RemoveStudent = (req,res) =>{
    let id = req.params.id;
    let query = { _id:id };
    studentModal.remove(query,(err,data)=>{
        if (err){
            res.status('402').json({
                status:"fail",
                data:err,
            });
        }else{
            res.status('200').json({
                status:"success",
                data:data,
            });
        }

    })
}