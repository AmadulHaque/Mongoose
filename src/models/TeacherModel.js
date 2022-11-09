const mongoose = require('mongoose');

const DataSchema=  mongoose.Schema({
    Name:String,
    Position:String,
    Salary:String
});

const TeacherModal = mongoose.model('teachers',DataSchema);
module.exports = TeacherModal;