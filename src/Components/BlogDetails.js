import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Components/usefetch";

const BlogDetails = () => {
    let {id}=useParams()
    let {Data:blog,error,Ispending}=useFetch("http://localhost:4500/blogs/" + id)
    let Navigate=useNavigate()
    

    function handleClick(){
      fetch("http://localhost:4500/blogs/" + id,{
        method:"DELETE"
      })
      .then(()=>Navigate("/"))
    }


    return ( 
        <div className="blog-details">
            {Ispending&&<p>Loading...</p>}
            {error&&<p>{error}</p>}
            {blog&&<article>
              <h2 className="details-title">{blog.title}</h2>  
                <h3 className="details-author"> Written by {blog.author} </h3> 
                <br /> 
                
                  <p className="details-body">{blog.body}</p>
                <br /><br />
              <button onClick={handleClick}>Delete blog</button>

                </article>}
        </div>
     );
}
 
export default BlogDetails;