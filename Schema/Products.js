const mongoose = require('mongoose');
const SchemaProduct = new mongoose.Schema(
    {
        name  : {type:String , required:true},
        category : {type:String , required:true},
        property : {type:String , required:true},
        price : {type:String , required:true},
        url : {type:String , required:true},

    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("Product",SchemaProduct)