import logo from './logo.svg';
import './App.css';
import './index.css';
import Cousal from './MyCompo/Cousal';
import NavBar from './MyCompo/NavBar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import FooterBar from './MyCompo/FooterBar';


function App() {
  let styly = {
    
    color:"white",
    backgroundColor:"black"
   
 }
  return (
    <div>
      <header>
        <NavBar/>
      <Cousal/>
      </header>
      <main style={styly}>
        
      </main>
      <footer>
        <FooterBar/>
      </footer>
      
    </div>
  );
}

export default App;
