const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name:String,
    Roll:String,
    Class:String,
    Phone:{
        type:String,
        validate:{
            validator:function(value) {
                if(value.length===11){
                    return true;
                }else {
                    return false;
                }
            },
            message:"Number required 11 digits",
        },

    }
});

const StudentsModel = mongoose.model('students',DataSchema);

module.exports = StudentsModel;