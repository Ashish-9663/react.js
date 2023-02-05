import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

   const incre = () => {
    setCount(count=count+1);
   }
   const decr = () =>{
    setCount(count=count-1);
   }
  return (
    <div className="App">
      <h3>{count}</h3>
      {/* <button onClick={() => setCount((count = count + 1))}>CountUp</button>
      <button onClick={() => setCount((count = count - 1))}>CountDown</button> */}
      <button onClick={incre}>CountUp</button>
      <button onClick={decr}>CountDown</button>
    </div>
  );
}

export default App;
