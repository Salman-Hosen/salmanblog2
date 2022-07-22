import axios from 'axios'
import React, {  useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/Context'

const Delete =  async() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const postId = location.pathname.split('/')[3]
    const [post,setPost] = useState({})
    console.log(location)
    if(user.name === post.username){
        const {username,_id} = post
        const deletPost = await axios.delete(`/delete/:${postId}`,{
            username,
            id:_id
        })
        console.log(deletPost.data)
        
    }

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get('/api/post/single/'+postId)
            console.log(res.data)
            setPost(res.data)
        }
        getPost()
    },[postId])

  return (
    <div>
        <h1>Hlll</h1>
    </div>
  )
}

export default Delete