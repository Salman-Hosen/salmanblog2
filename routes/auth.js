const router = require('express').Router()
const User = require('../database/User')
//Register
router.post('/register', async (req,res)=>{

 try {
    const newUser =  new User({
        name:req.body.name,
        email:req.body.email,
        password: req.body.password
    })

    const user = await newUser.save()
    return res.status(200).json(user)

 } catch (error) {
    return res.status(400).json(error)
 } 
})

// Login

router.post('/login',async(req,res)=>{

    const user = await User.findOne({email:req.body.email})
    if(user){
        try {
            if(req.body.password === user.password){
                res.status(200).json(user)
            }else{
                res.status(402).json("password")
            }
        }catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }else{
        res.status(401).json("invalid email")
    }
    
  
})
module.exports = router
