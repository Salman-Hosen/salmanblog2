import React, { useEffect, useState } from 'react'
import './Footer.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Footer = () => {
    const [cats,setCats] = useState([])


    useEffect(()=>{
        const fetchCats = async()=>{
         const res = await axios.get('/api/catagory')
         setCats(res.data)
        }
        fetchCats()
    })
  return (
    <>
    <div className='Footer'>
        <div className='row Footer1'>
    
            <div className='Footer-cat col-lg-8'>
                <div className='Footer-cat-cat'>
                {cats.map((cat,index)=>(
                <h6 key={index}>
                <Link to={`/?catagory=${cat.name}`} className="link">{cat.name}</Link> 
                </h6>
                ))} 
                </div>
                
            </div>

            <div className='Footer-social col-lg-4'>
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-whatsapp-square"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github-square"></i>
            </div>
        </div>
        <div className='copyright'>
            Copyright @ salman 2022
        </div>
    </div>
    </>
  )
}

export default Footer