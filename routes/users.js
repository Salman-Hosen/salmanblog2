
const router = require('express').Router()
const User = require('../database/User')
const Post = require('../database/Post')

//Update user
router.put('/update/:id',async(req,res)=>{
    if(req.body.id === req.params.id){
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            })
            res.status(200).json(updateUser)
        } catch (error) {
            res.status(400).json(error)
        }
    }else{
        res.json("You can update only your data")
    }
})

//delete user
router.delete('/:id/delete',async(req,res)=>{
    if(req.body.id === req.params.id){
        try {
         const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({name:user.name})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Your id has been deleted")
            } catch (error) {
                res.status(406).json("This account is not exist")
            }
        } catch (error) {
         res.status(406).json("This account is not exist")
        }

    }else{
        res.status(405).json("You can delete only your id")
    }
})

//Get one user
router.get('/:id/get',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password,...others} = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router