import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';

const MainContainer = () => {
  const App_Id = "b2651f6d";
  const App_Key = "ccf90c88ac4adbe4a60c0ac211ff912d	";

  useEffect( () =>{
      console.log("effect");
  },[]);

  const getRecipe = async () =>{
    const response = await axios.get();
  }

  return (
    <div className="componentContainer">
      <header >Food Items</header>
      <main>
        <div className="searchBar">
            <button id='searchboxLabel'>Search</button>
            <input type="text" id='searchbox' name='text'/>
        </div>
        <div className="maincontainer">
          
        </div>
      </main>
    </div>
  )
}

export default MainContainer;
