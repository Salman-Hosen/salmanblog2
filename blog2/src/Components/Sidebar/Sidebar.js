import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import welcome from '../Sidebar/welcome.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const [cats,setCats] = useState([])


    useEffect(()=>{
        const fetchCats = async()=>{
         const res = await axios.get('/api/catagory')
         setCats(res.data)
        }
        fetchCats()
    })
  return (
    <div className='Sidebar'>
        <div className='Sidebar-about'>
            <h2>Welcome</h2>
            <div className='Sidebar-about-img'>
            <img src={welcome}/>
            </div>
            
        </div>
        <div className='Sidebar-catagory'>
            <h4>Catagories</h4>
        </div>
        <div className='Sidebar-menu'>
            {cats.map((cat,index)=>(
            <h4 key={index}>
            <Link to={`/?catagory=${cat.name}`} className="link">{cat.name}</Link> 
            </h4>
            ))}
            
            
        </div>
        <div className='Sidebar-catagory'>
            <h4>Follow Us</h4>
        </div>
        <div className='Sidebar-social'>
        <i class="fa-brands fa-facebook-square"></i>
        <i class="fa-brands fa-whatsapp-square"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github-square"></i>
        </div>
    </div>
  )
}

export default Sidebar