
import './App.css';
import ColorPalatter from "./Components/ColorPalatter";

function App() {

  const palate = {
    code : "#FF6663",
    colorName : "pink"
  };

  return (
    <>
       <div>connected</div>
       <ColorPalatter  color={palate} colorName={palate} />
    </>
  );
}

export default App;
