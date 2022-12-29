

import React from 'react';
import { useContext } from 'react';
import { toggleContext } from '../Context';
import Navbar from './Navbar';

function Services() {

    const {changeTheme} = useContext(toggleContext);

  return (
    <div>
        <Navbar/>
    <div style={changeTheme}>
    
        <h1>Our services are not available</h1>
        <p className='Ptag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro quibusdam vitae. Quidem ea ducimus expedita soluta quaerat ad necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde.</p>
    </div>
    </div>
  )
}

export default Services;