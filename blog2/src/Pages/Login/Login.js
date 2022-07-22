import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Context } from '../../Components/context/Context'
import './Login.css'

const Login = () => {
    const userRef = useRef()
    const passwordRef = useRef()
    
    const {dispatch,isFetching} = useContext(Context)
    
 
  const submitted = async(e)=>{
    
    e.preventDefault();
    const email = userRef.current.value
    const password=passwordRef.current.value
    
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post('/api/auth/login',{
        email,password
      })

      if(res.status === 401){
        dispatch({type:"LOGIN_FAILURE"})
        alert("Invalid email")
        
      }else if(res.status === 402){
        dispatch({type:"LOGIN_FAILURE"})
        alert("Invalid password")
        
      }else{
        console.log(res.status)
        alert("Login successfull")
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        window.location.replace('/')
      }
      
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"})
      alert("Invalid data")
     
    }
  }
  return (
    <>
        <div className='Login'>
            {/* <button className='regibutton'>Register</button> */}
            <form onSubmit={submitted}>
            <h2>Log in</h2>
                <label>Email</label>
                <input type="email" ref={userRef}/>
                <label>Password</label>
                <input type="Password" ref={passwordRef} />
                <button>Login</button>
            </form>
        </div>
       
        
    </>
  )
}

export default Login