import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Page not Found!</h1>
            <p>Sorry, the page that you are looking for does not exist.</p>
            <Link to="/">Back to home</Link>
        </div>
     );
}
 
export default NotFound;