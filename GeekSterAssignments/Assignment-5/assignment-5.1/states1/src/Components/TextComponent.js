 import React, {useState} from "react";

function TextComponent() {
 
 const [btn, setBtn] = useState({
   backgroundColor:"white"
 })
 const [txtH1, setTxt] = useState({
  color:"black"
})
  
 const onChange = () => {
   if(btn.backgroundColor == "white"){
    setBtn({
      backgroundColor:"black"
    });
    setTxt({
      color:"white"
    });
   }
   else{
    setBtn({
      backgroundColor:"white"
    });
    setTxt({
      color:"black"
    });
   }
  }

  return (
    <div className="mainContainer" style={btn}>
    <div className="insideContainer" >
      <div className="header">
        <h1 className="h1" style={txtH1}>Overreacted</h1>
        <button className="button" onClick={onChange}>Toggle</button>
      </div>
      <div className="midtextcontainer">
        <div>
          <h2>The WET Codebase</h2>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            excepturi!
          </p>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            eius?
          </p>
        </div>
        <div>
          <h2>Goodby, clean Code</h2>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            excepturi!
          </p>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            eius?
          </p>
        </div>
        <div>
          <h2>My Decade in Review</h2>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            excepturi!
          </p>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            eius?
          </p>
        </div>
        <div>
          <h2>What Are The React Team Principles</h2>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            excepturi!
          </p>
          <p style={txtH1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            eius?
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default TextComponent;
