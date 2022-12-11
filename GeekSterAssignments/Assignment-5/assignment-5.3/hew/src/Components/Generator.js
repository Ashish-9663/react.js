import React, { useState } from 'react';
import { upperCaseLetters, lowerCaseLetters, symbolsLetters, numbersLetters } from './Characters';

const Generator = () => {
  const[password, setPassword]=useState("");
  const[passwordLength, setPasswordlengt]=useState(20);
  const[upperCase, setUppercase]=useState(false);
  const[lowerCase, setLowercase]=useState(false);
  const[numbers, setNumbers]=useState(false);
  const[symbols, setSymbols]=useState(false);

  const generatePassword=(e)=>{
    let characterList="";

    if(upperCase){
      characterList=characterList+upperCaseLetters;
    }

    if(lowerCase){
      characterList=characterList+lowerCaseLetters;
    }

    if(numbers){
      characterList=characterList+numbersLetters;
    }

    if(symbols){
      characterList=characterList+symbolsLetters;
    }
    
    setPassword(generatePasswordFun(characterList));
  } 

  const generatePasswordFun = (characterList) => {
    console.log(characterList)
    let password="";
    const characterListLength=characterList.length;
    console.log(characterListLength)
    console.log(passwordLength,"--")

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random()*characterListLength);
      console.log(characterIndex,"++")
      password=password + characterList.charAt(characterIndex); 
    }
    console.log(password)
    return password;
  }


  const copyToClipboard=()=>{
  const texArea = document.createElement('textarea');
  texArea.innerText=password;
  document.body.appendChild(texArea);
  texArea.select();
  document.execCommand('copy');
  texArea.remove();
  alert("Copied");
  }

  const copyPassword =(e)=>{
    copyToClipboard();
    
  }

  return (
    <div className="mainOuterContainer">
        <div className="mainInnerContainer">
          
          <h2 id='mainHeading'>Password Generator</h2>
          <div className='inputText'>
          <input type="text" name="Text"  id="text"maxLength="20" minLength="8" defaultValue={password}/>
          <button onClick={copyPassword} id='btnCpy'>
            <i className='far fa-copy'></i> 
          </button>
           
           <div className='passwordSize'>
            <label htmlFor="length">Select Password length
            <input id="lngth" type="number"  name="number" max="20" min="8" defaultValue={passwordLength} onChange={(e) => setPasswordlengt(e.target.value)}/></label>
           </div>
          </div>

          <div className='optionList'>
          <lable htmlFor="uppercase" className="optionsLabels">
          <input type="checkbox" name="UpperCase" checked={upperCase} onChange={(e) => setUppercase(e.target.checked)} id="uppercase"/>include uppercase letters
          </lable>
            <br/>
          <lable htmlFor="lowercase" className="optionsLabels">
          <input type="checkbox" name="LowerCase" checked={lowerCase} onChange={(e) => setLowercase(e.target.checked)} id="lowercase"/>include lowercase letters
          </lable>
            <br/>
          <lable htmlFor="numbers" className="optionsLabels">
          <input type="checkbox" name="Numbers" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} id="numbers"/>include numbers
          </lable>
            <br/>
          <lable htmlFor="symbols" className="optionsLabels">
          <input type="checkbox" name="Symbols" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} id="symbols"/>include symbols
          </lable>
          </div>
          <div className='generateBtn'>
            <button id='genBtn' onClick={generatePassword}>Generate Password</button>
          </div>
        </div>
    </div>
  )
}

export default Generator;
