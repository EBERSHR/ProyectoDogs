import React, { useState } from 'react';
import AppRouters from '../routers/AppRouters';
import '../styles/landing.css';


const Landing = () => {

    const [menu, setMenu] = useState(false);

    function handleClick() {
        setMenu(
            true
        )
    }

    return (
        <div className="landing">
            {menu ? <AppRouters /> : null}
            {!menu 
            ? 
            <div className="footer">
            <input type="button" value="Perros" className="landingInput" onClick={handleClick} /> 
            </div>
            
             : null}
        </div>
    );
}

export default Landing;
