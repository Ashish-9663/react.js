import logo from './logo.svg';
import './App.css';

function App() {
  
  const Colors = ['red','green','blue','orange','pink','yellow'];

  return (

    <div>
      {
        Colors.map{Element,idx}=>
        {
           return (
            <colorContainer />
           )
        }
      }
    </div>
  );
}

export default App;
