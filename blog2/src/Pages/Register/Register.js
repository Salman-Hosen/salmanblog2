import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'
import rimg from '../Register/rr.jpg'

const Register = () => {

  const [user,setUser] = useState({
    name:'',email:'',password:'',cpassword:''
  })
  const [error,setError] = useState(false)

  const handleInput = (e)=>{
    
    const getName = e.target.name
    const getValue = e.target.value
    setUser({...user, [getName]:getValue})
}

  const Submitted = async (e)=>{
    e.preventDefault();
    setError(false)

    const {name,email,password,cpassword} =user

    if(cpassword === password){
      try {
        const res = await axios.post('/api/auth/register',{
          name,email,password
        })
        res.data && alert("Registration is successfull")
        res.data && window.location.replace('/')
      } catch (error) {
        setError(true)
      }
      
    }else{
      alert("Please Confirm your password correctly")
    }

  }


  return (
    <>
       <section className="vh-100 bg-image" style={{backgroundImage: rimg}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3 p-5 ">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card " style={{borderRadius: "15px",maxWidth: "480px"}}>
            <div className="card-body p-10">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={Submitted}>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="name" value={user.name} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="email" value={user.email} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="password" value={user.password} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="cpassword" value={user.cpassword} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                </div>


                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
                {error && <h6 className='error-head'>Something happened Wrong</h6>}

                {/* <p className="text-center text-muted mt-3 mb-0">Have already an account? <a href="/login"  className="fw-bold text-body"><u>Login here</u></a></p> */}

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
    </>
  )
}

export default Register