import logo from './logo.svg';
import './App.css';   
import './index.css';{/*  external css by using index.css  */}
import ExternalCss from './ExternalCss';

function App() {
 let styleInline ={

   backgroundColor:"blue",
  color:"whilte"
 }

  return (
  <div>
  <h2>Way To Style</h2>
  <ExternalCss />       {/*  external css by using modular approch or adding component */}


  <h3 style={styleInline}>inline css</h3>     {/*  using in line css by making object of styleLine. */}
  </div>
  );
}

export default App;
