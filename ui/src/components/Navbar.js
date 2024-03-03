import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/" className="logo">Francis Tayag</Link>
            <div className="links">
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
            </div>
            
        </div>
    );
}
 
export default Navbar;