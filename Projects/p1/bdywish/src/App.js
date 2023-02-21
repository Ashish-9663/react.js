import './App.css';
import My from './components/MyFile';
function App() {
  const Mybutton = () => {
    alert('Click-Me');
  }
  return (
    <div className="App">
      <div className='leftSide'>
        <h1>Happy BirthDay</h1>
        <h1>Ruchika</h1>
      </div>
      <div className='rightSide'>
        <img src='https://www.facebook.com/photo/?fbid=2200981830079878&set=a.103341189843963' alt="imageOfBairthDayPerson"/>
      </div>
      <button onClick={Mybutton}>Click Here</button>
      <My pass={Mybutton}/>
    </div>
  );
}

export default App;
