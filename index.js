const express = require('express')
const app = express()
// database connection
require('./dbconnection/dbconnection')


//Upload images
const path = require('path')
app.use('/images',express.static(path.join(__dirname,'/images')))

const multer = require('multer')
    // create imgae storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"/images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})
    // Upload this image

    const upload = multer({storage:storage})
    app.post('/api/upload',upload.single('file'),(req,res)=>{
        res.status(200).json("file is uploaded")
    })



//json file
app.use(express.json())
// body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Using Routes
const authRoute = require('./routes/auth')
app.use('/api/auth',authRoute)
const userRoute = require('./routes/users')
app.use('/api/user',userRoute)
const postRoute = require('./routes/posts')
app.use('/api/post',postRoute)
const catagoryRoute = require('./routes/catagory')
app.use('/api/catagory',catagoryRoute)




// Heroko

if(process.env.NODE_ENV == "production"){

    const path = require('path')
    app.use(express.static(path.join(__dirname, "blog2", "build")))
   
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "blog2", "build", "index.html"));
    });
}



require("dotenv").config()
const port = process.env.PORT || 3008;
app.listen(port,()=>{
    console.log("Your server is running at"+ `${port}`)
})