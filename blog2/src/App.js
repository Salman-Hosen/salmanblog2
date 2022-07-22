import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from './Components/context/Context'
import Delete from './Components/DeletePost/Delete'
import Footer from './Components/Footer/Footer'


import Navbar from './Components/Navbar/Navbar'
import SinglePage from './Components/SinglePage/SinglePage'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import UpdatePage from './Pages/UpdatePage/UpdatePage'
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile'
import Write from './Pages/Write/Write'


const App = () => {
  const {user} = useContext(Context)
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/singlepage/:postId' element={<SinglePage/>} />
    <Route path='/post/delete/:postId' element={<Delete/>} />
    <Route path='/updatepage/:postId' element={<UpdatePage/>} />
    <Route path='/updateprofile' element={<UpdateProfile/>} />
    <Route path='/write' element={user?<Write/>: <Register/>}/>
    </Routes>
    <Footer/>
    </>
    
  )
}

export default App