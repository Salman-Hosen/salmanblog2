import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

const Post = ({post}) => {
  // const PF = "../../../../src/images/"
  return (
    
        <div className='Post'>
            <Link to={`/singlepage/${post._id}`} className='Post-link'>
            {/* <img src={PF+post.photo} alt="network problem"/> */}
            <h5 className='Post-cat'>{post.catagory}</h5>
            <h6 className='Post-date'>{new Date(post.createdAt).toDateString()}</h6>
            <h2 className='Post-title'>{post.title}</h2>
            <p className='Post-desc'>{post.desc}</p>
            </Link>
        </div>
    
  )
}

export default Post