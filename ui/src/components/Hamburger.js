import { useState } from "react";
import '../styles/Hamburger.css';

const Hamburger = () => {
    const [isToggled, setToggle] = useState(false);
    console.log(isToggled);

    return ( 
        <div className={"hamburger " + (isToggled ? 'visible' : 'hidden')}>
            <input type="checkbox" onClick={() => setToggle(isToggled ? false : true)} />
        </div>
    );
}
 
export default Hamburger;