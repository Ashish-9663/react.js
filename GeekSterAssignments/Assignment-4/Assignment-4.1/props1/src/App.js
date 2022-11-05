import './App.css';
import ColorPalatter from "./Components/ColorPalatter";

function App() {

  const pink = {
    code : "#FF6663",
    colorName : "PINK"
  };
  const black = {
    code : "#000000",
    colorName : "BLACK"
  };
  const gray = {
    code : "#333333",
    colorName : "GRAY"
  };
  const green = {
    code : "#38BB14",
    colorName : "GREEN"
  };
  const red = {
    code : "#C90B0B",
    colorName : "RED"
  };
  const orange = {
    code : "#FF8000",
    colorName : "ORANGE"
  };
  const yellow = {
    code : "#FFF500",
    colorName : "YELLOW"
  };
  const light_grey = {
    code : "#CCCCCC",
    colorName : "LIGHT_GREY"
  };
  const purple = {
    code : "#7E41A2",
    colorName : "PURPLE"
  };
  const brown = {
    code : "#C14911",
    colorName : "BROWN"
  };
  return (
    <div className="main">
       <div className="container">
       <ColorPalatter  color={pink} colorName={pink} />
       <ColorPalatter  color={gray} colorName={gray} />
       <ColorPalatter  color={black} colorName={black} />
       <ColorPalatter  color={green} colorName={green} />
       <ColorPalatter  color={red} colorName={red} />
       <ColorPalatter  color={orange} colorName={orange} />
       <ColorPalatter  color={yellow} colorName={yellow} />
       <ColorPalatter  color={light_grey} colorName={light_grey} />
       <ColorPalatter  color={purple} colorName={purple} />
       <ColorPalatter  color={brown} colorName={brown} />
       </div>
    </div>

  );
}

export default App;
