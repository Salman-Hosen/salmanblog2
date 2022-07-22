import React, { useContext, useState } from 'react'
import axios from 'axios'
import './Write.css'
import postimg from './bg6.jpg'
import { Context } from '../../Components/context/Context'

const Write = () => {
    const {user} = useContext(Context)
    const [catagory,setCatagory]= useState()
    const [file,setFile] = useState(null)
    const [previwFile,setPreviewFile]=useState(null)
    const [post,setPost ] = useState({title:'',desc:''})
    const wpdata = (e)=>{
        const getName = e.target.name
        const getValue = e.target.value
        setPost({...post, [getName]:getValue})
    }
    const wpSubmitted =async(e)=>{
        e.preventDefault();
        const {title,desc} = post
        const newPost = {
            username:user.name,
            title,
            desc,
            photo:'',
            catagory
        };
        if(file){
            const data =new FormData()
            const filename = Date.now() +".jpg"
            data.append("name",filename)  // append to data file r name as filename
            data.append('file',file)     // append file as file
            // adding img file to newPost
            
            newPost.photo = filename

            try {
                // sending image file to node js
            const res = await axios.post('/api/upload',data)
            console.log(res.data)
            } catch (error) {
                console.log(error)
            }

            // let formData = new FormData()
            // formData.append('file', file)
            // const response = await fetch('/api/upload', {
            //   method: 'POST',
            //   body: formData,
            // })
            // console.log(response)
        }
        try {
         const res =   await axios.post('/api/post/createpost',newPost)
         window.location.replace('/singlepage/'+res.data._id)
        } catch (error) {
            
        }
        
    }


    const handeFile=(e)=>{
        setPreviewFile(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])

    }
    const handleCatagory =(e)=>{
        setCatagory(e.target.value)
        console.log(e.target.value)
    }

  return (
    <>
    <div className='Write'>
        <h2>Create your Post</h2>
        <h4>⭐⭐⭐</h4>
        <form onSubmit={wpSubmitted}>
            <div className='row'>
                <div className='col-lg-6'>
                    <label>Upload photo</label>
                    <div className='postpicUpload'>
                        <img src={previwFile? previwFile:postimg}/>
                        <input type="file" onChange={handeFile} required />
                        <select class="form-select" aria-label="Default select example" value={catagory}onChange={handleCatagory} required>
                            <option selected >Please select a Catagory of your post</option>
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
                        <input placeholder='Add your title' type="text" onChange={wpdata}
                        name="title" value={post.title}/>
                    </div>
                    <div className='createpostdesc'>
                        <textarea placeholder='Write your story.....' type="text" 
                        onChange={wpdata}  name="desc" value={post.desc} />
                    </div>
                    <div className='publishyourpost'>
                        <button>Publish</button>
                    </div>
                </div>
             </div>
        </form>
    </div>
        
    </>
  )
}

export default Write