import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div>
            <Link to="/">Francis Tayag</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
}
 
export default Navbar;