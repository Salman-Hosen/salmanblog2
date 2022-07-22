const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String
    },
    desc:{
        type:String
    },
    photo:{
        type:String
    },
    catagory:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const Post = new mongoose.model("Post",PostSchema)

module.exports = Post