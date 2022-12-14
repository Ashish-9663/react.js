import React ,{ useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import MainContainer from './Components/MainContainer';
import Axios from "axios";
import Items from './Components/Items';

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const App_Id = "b2651f6d";
  const App_Key = "ccf90c88ac4adbe4a60c0ac211ff912d	";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () =>{
      const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}&from=0&to=3&calories=591-722&health=alcohol-free`);
      
      setRecipes(res.data.hits);console.log(res);
  };


  const onInputchange = (e) =>{
    setSearch(e.target.value);
  }; 
  const onSearchClick = () => {
    getRecipes();
  } 
  return (
    <div className="App">
      <div className="appMain">
      <MainContainer  search={search} onInputchange={onInputchange} onSearchClick={onSearchClick}/>
      <Items recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
