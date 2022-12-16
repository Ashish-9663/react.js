import React from 'react'

function Header(props) {
    const{search, onInputchange, onSearchClick} = props;
  return (
    <div className='headerComponent'>
        <div className='headerComponentHeading'>
            HOOKED
        </div>
        <div className='headerComponentSearchBox'>
            <button className='headerComponentSearchButton' >Search</button>
            <input className='headerComponentSearchInput' type="text" placeholder="Type here to search...." />
        </div>
    </div>
  )
}

export default Header;