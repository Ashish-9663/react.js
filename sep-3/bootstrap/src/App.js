import logo from './logo.svg';
import './App.css';
import './index.css';
import NavBar from './Components/NavBar';
import Coursal from './Components/Coursal';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";




function App() {
  return (
  
     <section>
      <NavBar/>
      <hr/>
      <Coursal/>
    </section>
  //   <main></main>
  //  <footer></footer>
    
  );
}

export default App;