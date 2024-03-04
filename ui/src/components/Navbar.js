import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo-container">
                <Link to="/" className="logo">Francis Tayag</Link>
            </div>
            <div className="links">
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
            </div>
            
        </div>
    );
}
 
export default Navbar;