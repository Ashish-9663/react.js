import React, { useState } from "react";
import ReactMarkdown from "react-markdown";


export default function Editor() {
  const [markDown, setMarkDown] = useState("Markdown preview");
  
  return (
    <>
      <div className="innerContainer">
        <div className="innercontainerLeftOuter">
          <div className="innercontainerLeft">
            < textarea className="txtarea" value={markDown} onChange={(e) => setMarkDown(e.target.value)}/>
          </div>
        </div>

        <div className="innercontainerRightOuter">
          <div className="innercontainerRight" >
          <ReactMarkdown children={markDown} />
          </div>
        </div>
      </div>
    </>
  );
}
