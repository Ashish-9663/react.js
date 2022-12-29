
import React from 'react';
import { useContext } from 'react';
import { toggleContext } from '../Context';
import Navbar from './Navbar';

function Contact() {

    const {changeTheme} = useContext(toggleContext);

  return (
    <div> 
        <Navbar/>
      <div style={changeTheme}>
      
        <h1>You can mail me help@geekster.in</h1>
      </div>
    </div>
  )
}

export default Contact