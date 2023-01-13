import "./App.css";
import Contest from "./Components/Contest";
import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
// import {dataContext} from "./Context.js";

function App() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    contestList();
  }, []);

  const contestList = async () => {
    const list = await Axios.get(`https://kontests.net/api/v1/all`);
    setData(list.data);
    console.log(list.data);
  };

  return (
    <div className="App">
      {/* <dataContext.Provider value={getData}> */}
      <Contest getData={getData} />
      {/* </dataContext.Provider> */}
    </div>
  );
}

export default App;
