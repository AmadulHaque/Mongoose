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
