import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isToggled, setToggle] = useState(false);
    const [linkClass, setLinkClass] = useState("links hide")

    useEffect(() => {
        if(isToggled == true) {
            setLinkClass("links")
        }
        else {
            setLinkClass("links hide")
        }
    }, [isToggled])

    return ( 
        <div className="navbar">
            <div className="logo-container">
                <Link to="/" className="logo">Francis Tayag</Link>
            </div>
            
            <div className={"hamburger " + (isToggled ? 'toggled' : 'untoggled')}>
                <input type="checkbox" onClick={() => setToggle(isToggled ? false : true)} />
            </div>

            <div className={linkClass}>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/">Contact</Link>
            </div>
            
        </div>
    );
}
 
export default Navbar;