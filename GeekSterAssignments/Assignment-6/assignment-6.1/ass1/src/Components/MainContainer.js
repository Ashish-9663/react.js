import React from "react";

const MainContainer = (props) => {
  const {search, onInputchange, onSearchClick} = props;

  return (
    <div className="componentContainer">
      <header >Food Items</header>
      <div className="searchBar">
            <button id='searchboxLabel' onClick={onSearchClick}>Search</button>
            <input type="text" id='searchbox' defaultValue={search} onChange={onInputchange} />
        </div>
      
    </div>
  )
}

export default MainContainer;
