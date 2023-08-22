const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
    
}, {versionKey:false})

const UserModel = mongoose.model("user",userSchema);


module.exports={
    UserModel
}