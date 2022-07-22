const mongoose = require("mongoose")

const CatagorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const Catagory = new mongoose.model("Catagory",CatagorySchema)

module.exports = Catagory