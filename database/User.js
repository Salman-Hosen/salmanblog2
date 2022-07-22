const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
        default:''
    }
},
{timestamps:true}
);

const User = new mongoose.model("User",UserSchema)

module.exports = User