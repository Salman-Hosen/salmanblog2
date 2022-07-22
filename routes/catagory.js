const router = require('express').Router()
const Catagory = require('../database/Catagory')

// Create catagory
router.post('/createcatagory',async(req,res)=>{
        const catagory = new Catagory(req.body)
        const newCat = await catagory.save()
        res.status(200).json(newCat)
})

//get Caatagory
router.get('/',async(req,res)=>{
    const catagory = await Catagory.find()
    res.status(200).json(catagory)
})

module.exports = router