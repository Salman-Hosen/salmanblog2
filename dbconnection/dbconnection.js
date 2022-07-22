const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://salman:salman@cluster0.b2hho5k.mongodb.net/?retryWrites=true&w=majority")
.then((res)=> console.log("Your database is connect successfully"))
.catch(()=>console.log("Can not connect your database"))