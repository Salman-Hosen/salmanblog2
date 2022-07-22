import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../context/Context'
import './SinglePage.css'

const SinglePage = () => {
    const {user} = useContext(Context)
    const PF = "../../../../images/"
    const location = useLocation()
    
    const [post,setPost]=useState({})
    const path = location.pathname.split('/')[2]

    const handleDelete =async()=>{

        const username = user.name
        const deletPost = await axios.delete(`/api/post/delete/${path}`,{
           data:{ username,
            id:path}
        })
        window.location.replace('/')
        console.log(post)
        console.log(user)
        
    }


    useEffect(()=>{
        const getPost = async()=>{

            const res = await axios.get('/api/post/single/'+path)
            console.log(res.data)
           setPost(res.data)
        }
        getPost()    
},[path])

  return (
    <>
      <div className='SinglePost'>
        <div className='SinglePost-img'>
            <img src={PF +post.photo} alt="Network Problem"/>
        </div>
        <div className='SinglePost-other'>
            <div className='SinglePost-aandd'>
                <span className='SinglePost-autor'>Author :  
                <Link to={`/?username=${post.username}`} className="link"> {post.username}</Link>
                
                </span>
                <span className='SinglePost-date'>
                    {new Date(post.updatedAt).toDateString()} </span>
            </div>
            <div className='SinglePost-update'>
            <Link to={`/updatepage/${path}`} className="link"> <i class="fa-solid fa-pen-to-square" ></i></Link>
                
                <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>
          
        </div>
        <div  className='SinglePost-title'>
            <h2>{post.title}</h2>
        </div>
        <div className='SinglePost-desc'>
            <p>{post.desc}</p>
        </div>
        {/* <div className='post-comment'>
            <label>Add a comment</label>
            <form onSubmit={commented}>
                <input type="text" onChange={(e)=>setComment(e.target.value)} value={comment} name="comment" />
                <button type='submit'>Comment</button>
            </form>
        </div>
        <div>
            <li>
                {
                  showcomments.map((s,index)=>{
                    return <div key={index}>{s}</div>
                  }) 
                }
            </li>
        </div> */}
    </div>
        
    </>
  )
}

export default SinglePage