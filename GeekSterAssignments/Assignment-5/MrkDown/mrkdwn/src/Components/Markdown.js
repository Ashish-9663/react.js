import React from 'react';
import { useState } from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

function Markdown() {

    const [setInput, getInput] = useState("new");
  return (
    <>
    <div className='textarea'>
        <textarea  value={setInput} onChange={(e) => getInput(e.target.value)}/>
    </div>
    <div className="markdown">
        <ReactMarkdown children={setInput} className="areaoutput" remarkPlugins={[remarkGfm]} /> 
    </div>
    </>
  )
}

export default Markdown;