import './App.css';
import React ,{ useState, useEffect } from 'react';
import Header from "./Components/Header";
import  Items from "./Components/Items";
import Axios from "axios";
function App() {

  const Api_key ="b6a2a477";
   
  const [getData, setData] = useState([]);
  const [search, setSearch] = useState("superman");
   
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies  = async () => {
    const res =await Axios.get(`http://www.omdbapi.com/?apikey=${Api_key}&s=${search}`);
    console.log(res);
    setData(res.data.hits);
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
        <Items/>
     
    </div>
  );
}

export default App;
