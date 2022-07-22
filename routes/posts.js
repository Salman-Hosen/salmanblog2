const router = require('express').Router()
const Post = require('../database/Post')

//Create Post
router.post('/createpost',async(req,res)=>{
    try {
        const newPost = await new Post(req.body)
        res.status(200).json(await newPost.save())
    } catch (error) {
        res.status(400).json(error)
    }
})

//Update Post
router.put('/update/:id',async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if(req.body.username === post.username){
        try {
            const updatePost = await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
            })
            res.status(200).json("successfull")
           
        } catch (error) {
            res.status(400).json(error)
        }
    }else{
        res.status(405).json("You can update only your post")
    }
})

// Delete post
router.delete('/delete/:id',async(req,res)=>{
    if(req.body.id === req.params.id){
        try {
            const post = await Post.findById(req.params.id)
            try {
                if(req.body.username === post.username){
                    await post.delete()
                    res.status(200).json("Your post is deleted")
                }
            } catch (error) {
                res.status(404).json("You already delete this post")
            }
        } catch (error) {
            res.status(400).json('This post is not exist')
        }

    }else{
        res.status(405).json("You can delete only your post")
    }
})

// Get post
router.get('/',async(req,res)=>{
    const username = req.query.username
    const catagory = req.query.catagory
    const id = req.params.id
    let posts;
    try {
        if(username){
            posts = await Post.find({username:username})
            res.status(200).json(posts)
        }else if(catagory){
            posts = await Post.find({catagory:catagory})
            res.status(200).json(posts)
            console.log(posts)
        }else if(id){
            posts = await Post.find({_id:id})
            res.status(200).json(posts)
        }else{
            posts = await Post.find()
            res.status(200).json(posts)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/single/:id',async(req,res)=>{
    const id = req.params.id
    let posts;
    try {
        if(id){
            posts = await Post.find({_id:id})
            res.status(200).json(posts[0])
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router