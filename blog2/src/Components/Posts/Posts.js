import React from 'react'
import Post from '../Post/Post'
import './Posts.css'

const Posts = ({posts}) => {
  return (
    <>
        <div className='Posts'>
            {posts.map((p)=>(
            <div key={p._id} className="postdiv">  <Post post={p}/></div>
            ))} 
        </div> 
    </>
  )
}

export default Posts