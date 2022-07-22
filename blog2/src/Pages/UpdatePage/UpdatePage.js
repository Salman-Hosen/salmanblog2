import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './UpdatePage.css'
import postimg from './bg6.jpg'
import { Context } from '../../Components/context/Context'
import { useLocation } from 'react-router-dom'

const UpdatePage = () => {

    //data come from single page
    const location = useLocation()
    const path = location.pathname.split('/')[2]
  
    
    const {user} = useContext(Context)
    const [catagory,setCatagory]= useState()
  
    const [title,setTitle] = useState()
    const [desc,setDesc] = useState()
    
    const handletitle = (e)=>{
       setTitle(e.target.value)
       console.log(e.target.value)
    }
    const handeldesc=(e)=>{
        setDesc(e.target.value)
    }
    const handleCatagory=(e)=>{
        setCatagory(e.target.value)
    }

    useEffect(()=>{
        const getUpdatePost = async()=>{
            const res = await axios.get('/api/post/single/'+path)
            console.log(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setCatagory(res.data.catagory)
        }
        getUpdatePost()  
       },[])


    const wpSubmitted =async(e)=>{
        e.preventDefault();

            try {
           const res = await axios.put(`/api/post/update/${path}`,{
             username:user.name,
                title:title,
                desc:desc
            })
            if(res.data){
                window.location.replace(`/singlepage/${path}`)
            }
            
            } catch (error) {
        
    }




}

  return (
    <>
    <div className='Write'>
        <h2>Update your Post</h2>
        <h4>⭐⭐⭐</h4>
        <form onSubmit={wpSubmitted}>
            <div className='row'>
                <div className='col-lg-6'>
                    <label>Upload photo</label>
                    <div className='postpicUpload'>
                        <img src={postimg}/>
                        
                        <select class="form-select" aria-label="Default select example" value={catagory|| ''}onChange={handleCatagory} required>
                            <option>Please select a Catagory of your post</option>
                            <option value="Religeous">Religeous</option>
                            <option value="Sports">Sports</option>
                            <option value="News">News</option>
                            <option value="Education">Education</option>
                            <option value="Health">Health</option>
                            <option value="Entertainment">Entertainment</option>
                            
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='createpostTitles'>
                        <span><i class="fa-solid fa-circle-plus"></i></span>
                        <input placeholder='Add your title' type="text" onChange={handletitle}
                        name="title" value={title || ''}/>
                    </div>
                    <div className='createpostdesc'>
                        <textarea placeholder='Write your story.....' type="text" 
                        onChange={handeldesc}  name="desc" value={desc ||''} />
                    </div>
                    <div className='publishyourpost'>
                        <button>Update</button>
                    </div>
                </div>
             </div>
        </form>
    </div>
        
    </>
  )
}

export default UpdatePage