import React from 'react'

const Header = () => {
  return (
    <div className="mainOuterContainer">
        <div className="mainInnerContainer">
          
          <h2 id='mainHeading'>Password Generator</h2>
          <div className='inputText'>
          <input type="text" name="Text"  id="text"/>
          <button type="copy" id='btnCpy'>Copy</button>
           
           <div className='passwordSize'>
            <label for="length">Select Password length
            <input id="lngth" type="text" name="text"/></label>
           </div>
          </div>

          <div className='optionList'>
          <lable for="uppercase" className="optionsLabels">
          <input type="checkbox" name="UpperCase" value="upperCase" id="uppercase"/>include uppercase letters
          </lable>
            <br/>
          <lable for="lowercase" className="optionsLabels">
          <input type="checkbox" name="LowerCase" value="lowercase" id="lowercase"/>include lowercase letters
          </lable>
            <br/>
          <lable for="numbers" className="optionsLabels">
          <input type="checkbox" name="Numbers" value="numbers" id="numbers"/>include numbers
          </lable>
            <br/>
          <lable for="symbols" className="optionsLabels">
          <input type="checkbox" name="Symbols" value="symbols" id="symbols"/>include symbols
          </lable>
          </div>
          <div className='generateBtn'>
            <button id='genBtn' type='submit'>Generate Password</button>
          </div>
        </div>
    </div>
  )
}

export default Header;
