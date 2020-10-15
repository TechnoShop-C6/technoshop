const mongoose = require('mongoose');
const SchemaPurchase = new mongoose.Schema(
    {
        user : {type:String , required:true},
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
module.exports = mongoose.model("Purchase",SchemaPurchase)