

import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import "./All.css";

function Services() {

    const isLight = useSelector((state) => state.isLight);

  return (
    <div >
        <Navbar/>
    <div className={isLight?'light':'dark'}>
    
        <h1>Our services are not available</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro quibusdam vitae. Quidem ea ducimus expedita soluta quaerat ad necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde.</p>
    </div>
    </div>
  )
}

export default Services;