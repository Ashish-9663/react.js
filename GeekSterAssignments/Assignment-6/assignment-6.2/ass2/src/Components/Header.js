import React from 'react'

function Header(props) {
    const{search, onInputchange, onSearchClick} = props;
  return (
    <div className='headerComponent'>
        <div className='headerComponentHeading'>
            HOOKED
        </div>
        <div className='headerComponentSearchBox'>
            <button className='headerComponentSearchButton' onClick={onSearchClick}>Search</button>
            <input className='headerComponentSearchInput' defaultValue={search} onChange={onInputchange} type="text" placeholder="Type here to search...." />
        </div>
    </div>
  )
}

export default Header;