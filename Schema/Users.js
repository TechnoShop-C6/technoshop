const mongoose = require('mongoose');
const SchemaUser = new mongoose.Schema(
    {
        name  : {type:String , required:true},
        email : {type:String , required:true},
        password : {type:String , required:true},
        phoneNumber : {type:String , required:true},
    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("User",SchemaUser)