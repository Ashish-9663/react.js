import './App.css';
import React, {useState} from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import {toggleContext} from "./Context.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
const [changeTheme, getChangeTheme] = useState({backgroundColor:"white",color:"black"});
const [setBtntxt, getBtntxt] = useState(" Theme to Dark");
const [setTheme, getTheme] = useState(" Theme to Light");


  const ToggleTheme = () =>{
     
     if(changeTheme.backgroundColor==="white"){
      getChangeTheme({backgroundColor:"black",color:"#7fffd4"});
      getBtntxt(" Theme to Light");
      getTheme(" Theme to Dark")
     }
      if(changeTheme.backgroundColor==="black"){
      getChangeTheme({backgroundColor:"white",color:"black"})
      getBtntxt(" Theme to Dark");
      getTheme(" Theme to Light");
     }
  }

  return (

       <BrowserRouter> 
      <toggleContext.Provider value={{setBtntxt,ToggleTheme,changeTheme, setTheme}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </toggleContext.Provider>
       </BrowserRouter> 
    
  )
}

export default App;
