import React, { useContext, useEffect, useState } from 'react'
import './UpdateProfile.css'
import ppimage from './salman.jpg'
import { Context } from '../../Components/context/Context'
import axios from 'axios'



const UpdateProfile = () => {
    const {user} = useContext(Context)
    const PF = "../../../../src/images/"

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [file,setFile] = useState()
    const [preview,setPreview] = useState()
    const [visible,setVisible] = useState(false)

    const hndlname = (e)=>{
        setName(e.target.value)
    }
    const hndlemail = (e)=>{
        setEmail(e.target.value)
    }
    const hndlpassword = (e)=>{
        setPassword(e.target.value)
    }
    const hndlfile = (e)=>{
        setFile(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
    }
    const showPassword=()=>{
        setVisible(!visible)
        console.log("hlw")
    }
    const updateData = {
        id:user._id,
        name:name,
        email:email,
        password:password,
        profilepic:''
    }

   
    useEffect(()=>{
        setName(user.name)
        setEmail(user.email)
        setPassword(user.password)
    },[user])

    const psubmitted=async(e)=>{
     e.preventDefault();
     if(file){
        const photo = new FormData()
        const photoname = Date.now() +".jpg"
        photo.append("name",photoname)  
        photo.append('file',file) 
        updateData.profilepic = photoname
        try {
        const res = await axios.post('/api/upload',photo)
        console.log(res.data)
        } catch (error) {
            console.log(error)
        }

        }
        try {
            const res = await axios.put(`/api/user/update/${user._id}`,updateData)
        if(res){
            alert("Your Data updated successfully")
            window.location.replace('/')
        }
        } catch (error) {
            console.log(error)
        }
        
        
    }


  return (
    <div className='Profile'>
        <div className='Profile-setting'>
            <div className='Profile-titles'>
                <h1>Update your account</h1>
                <h5>Delete Account</h5>
            </div>
            <div className='Others-setting'>
                <form onSubmit={psubmitted}>

                    <label >Update Profile Picture</label>
                    <div className='user-profile-updare'>
                        <img src={preview? preview:ppimage}/>
                        <label htmlFor='Ppupdate'>
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                        </label>
                        <input type='file' id="Ppupdate" style={{"display":"none"}}
                        onChange={hndlfile} />
                    </div>
                    <div className='row update-data'>
                        <div className='col-lg-9 update-user'>
                            <label htmlFor='name'>Username</label>
                            <input type='name' id="name" placeholder='Salman Farshi' onChange={hndlname} value={name}/>
                            <label htmlFor='email' >Email</label>
                            <input type='email'placeholder='salman@gmail.com' id="email" onChange={hndlemail} value={email}/>
                            <label htmlFor='password'>Password</label>
                            <div className='password'>
                                <input type={visible ? "text":"password"} placeholder='Use a strong password' id="password" onChange={hndlpassword} value={password}/>
                                <i class="fa-solid fa-eye-slash" 
                                onClick={showPassword}></i>
                            </div>
                         </div>
                        <div className='profile-publis col-lg-3'>
                            <button>Update</button>
                        </div>
                    </div>
                    
                </form>
                
                

            </div>
        </div>
       
        
    </div>
  )
}

export default UpdateProfile