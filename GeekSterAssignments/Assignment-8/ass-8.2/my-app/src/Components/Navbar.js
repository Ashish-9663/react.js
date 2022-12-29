import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLight } from "../Slice";
import "./All.css";


 const Navbar = () =>{
    const   isLight = useSelector((state) => state.isLight)
    const   dispatch = useDispatch()
    return(
        <div >
            <p className="navbarPtag">I have changed theme to {isLight?'Light':'Dark'}</p>
            <div className={isLight?'light':'dark'}  >Geekster<br/>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/contact'>Contact</Link>
            <br></br>
            <Link to='/service'>Service</Link>
            <br></br>
            <div ><button  onClick={() => {dispatch(setLight())}}  >Toggle theme to {isLight?'Dark':'Light'}</button></div>
            <br/>
        </div>
        </div>
    )
}
export default Navbar;