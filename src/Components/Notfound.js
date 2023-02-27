
import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, this page cannot be found</h2>
            <br />
            <h3></h3><br />
            <Link to='/'>Back to Homepage...</Link>
        </div>
     );
}
 
export default Notfound;