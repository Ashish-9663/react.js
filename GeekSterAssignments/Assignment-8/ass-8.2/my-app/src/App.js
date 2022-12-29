import React from 'react';
import './App.css';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Service' element={<Service/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
