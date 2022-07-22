import React, { useEffect, useState } from 'react'
import Posts from '../../Components/Posts/Posts'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'
import Header from '../../Components/Header/Header'

const Home = () => {
    const [posts,setPosts]= useState([])
    const {search} = useLocation()
    

    useEffect(()=>{
        const fetchposts = async()=>{
           const res = await axios.get('/api/post/'+search)
           setPosts(res.data)
           console.log(search)
           console.log(res.data)
        }
        fetchposts();
    },[search])
  return (
    <>  
     <Header/>
    <div className='Homepage'>
       
        <Posts posts={posts}/>
        <Sidebar/>
        </div>
    </>
  )
}

export default Home