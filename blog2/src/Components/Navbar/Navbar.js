import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { Context } from "../context/Context";
import './Navbar.css'
import navimg from './welcome.jpg'



const Navbar = () => {
  const PF = "../../../../images/"
 const {user,state,dispatch} = useContext(Context)

 const handelLogout=()=>{
  dispatch({type:"LOGOUT"})
  window.location.replace('/login')
}

  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"5px",position:"sticky"}}>
  <div className="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-nave-ul">
        <div className="row my-nave">
          <div className="col-lg-4 nav-social">
              <i class="fa-brands fa-facebook-square"></i>
              <i class="fa-brands fa-whatsapp-square"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-github-square"></i>
          </div>
          <div className="col-lg-4 nav-main">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home
                </Link>
              </li>
              {user? 
                  <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/write">Write</Link> 
                      </li> 
                      <li className="nav-item">
                        <Link className="nav-link" to="/logout" onClick={handelLogout}>Logout</Link> 
                      </li> 
                    </>
                    :
                    <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/login" 
                          >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>

                }
            
          </div>

          <div className="col-lg-4 nav-user">
            {
              user?<Link className="nav-link" to="/updateprofile"><img 
              src={ (PF+user.profilepic) ||navimg} alt="Please Login Again"/></Link> :<></>
            }
                
                {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          </div>
        </div>

          
          
          
         
        
      </ul>
    </div>
  </div>
</nav> 
    </>
  )
}

export default Navbar
