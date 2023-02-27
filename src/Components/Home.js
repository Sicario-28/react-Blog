

import useFetch from './usefetch';
import Bloglist from './Bloglist';

const Home = () => { 
  let {Data:blogs,error,Ispending}=useFetch("http://localhost:4500/blogs")
    return ( 
        <div className="home">
          {error&&<p>{error}</p>}
          {Ispending&&<p>Loading...</p>}
     { blogs && <Bloglist blogs={blogs} title="All Blogs" />}
      
        </div>
     );
}
 
export default Home