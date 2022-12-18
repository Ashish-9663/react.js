import './App.css';
import React ,{ useState, useEffect } from 'react';
import Header from "./Components/Header";
import  Items from "./Components/Items";
// import Axios from "axios";

function App() {
   
  const [getData, setData] = useState([]);
  const [search, setSearch] = useState("superman");
   
  useEffect(() => {
    getMovies();
    
  },[]);

  
  const getMovies  = async () => {
    const res =await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=600b8ea8&s=${search}`);
    const dat = await res.json();
    //console.log(dat);
    setData(dat.Search);
  }

  const onInputchange = (e) =>{
    setSearch(e.target.value);
  }; 
  const onSearchClick = () => {
    getMovies();
  } 


  return (
    <div className="App">
      
        <Header search={search} onInputchange={onInputchange} onSearchClick={onSearchClick}/>
        <Items getData={getData}/>
     
    </div>
  );
}

export default App;
