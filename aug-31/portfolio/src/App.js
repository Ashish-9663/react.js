import './App.css';
import './index.css';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Experiance from './Components/Experiance';
import Skills from './Components/Skills';

function App() {
  return (
    <main>
      <Bio/>
      <hr/>
      <Experiance/>
      <hr/>
      <Skills/>
      <hr/>
      <Contact/>
      <hr/>
    </main>
  );
}

export default App;
