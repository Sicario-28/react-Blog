import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

 let [Ispending,setIspending]=useState(false)
let [title,settitle]=useState('')
let [author,setauthor]=useState('')
let [body,setbody]=useState('')
 

let Navigate=useNavigate()

  function handleSubmit(event){
    event.preventDefault()
    
       setIspending(true)
     let blog={title,author,body}
    console.log(blog)

    fetch("http://localhost:4500/blogs",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
     body:JSON.stringify(blog)
    })  
    
    .then(()=>{
        setIspending(true)
      })
    .finally(()=>{
      Navigate("/")
    })

  }

    return ( 
        <div className="create">
            <h2>Add a new blog </h2>
            
            <form onSubmit={handleSubmit}>
          <label htmlFor="blogtitle">Blog title:</label>
          <input type="text" name="blogtitle" required value={title} onChange={(e)=>settitle(e.target.value)} />
          <label htmlFor="blogbody">Blog Body:</label>
          <textarea type="text" name="blogbody" required value={body} onChange={(e)=>setbody(e.target.value)} />
          <label htmlFor="blogauthor">Blog Author:</label>
          <select name="blogauthor" value={author} onChange={(e)=>setauthor(e.target.value)}>
            <option value="">--Choose--</option>
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>
            {Ispending&&<button disabled>Adding new blog...</button>} 
            {!Ispending&&<button id="add-btn">Add Blog</button>}  
            </form>
        </div>
     );
}
 
export default Create;
 