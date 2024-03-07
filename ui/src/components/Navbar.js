import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo-container">
                <Link to="/" className="logo">Francis Tayag</Link>
            </div>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/">Devlogs</Link>
                <Link to="/">Contact</Link>
            </div>
            
        </div>
    );
}
 
export default Navbar;