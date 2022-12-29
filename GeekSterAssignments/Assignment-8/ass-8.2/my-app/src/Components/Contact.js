import { useSelector } from 'react-redux';
import React from 'react';
import Navbar from './Navbar';
import "./All.css";

function Contact() {

    const isLight = useSelector((state) => state.isLight)

  return (
    <div > 
        <Navbar/>
      <div className={isLight?'light':'dark'}>
        <h1>You can mail me help@geekster.in</h1>
      </div>
    </div>
  )
}

export default Contact