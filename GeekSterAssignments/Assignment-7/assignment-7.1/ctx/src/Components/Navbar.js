import React from "react";
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { toggleContext } from '../Context';

 const Navbar = () =>{
    const   {setBtntxt,ToggleTheme,changeTheme, setTheme} = useContext(toggleContext);

    return(
        <div>
            <p>I have changed {setTheme}</p>
            <div style={changeTheme} className="navbar" >Geekster<br/>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/contact'>Contact</Link>
            <br></br>
            <Link to='/services'>Services</Link>
            <br></br>
            <div id="btns"><button id='toggleBtn' onClick={() => {ToggleTheme()}}  >Toggle{setBtntxt}</button></div>
        </div>
        </div>
    )
}
export default Navbar;