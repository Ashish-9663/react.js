import React from 'react'
import Result from "./Result";

const Items = (props) => {
   const {getData} = props;

  return (
    <div className='itemComponent'>
        
        { getData.map(getdatao => (
          <Result 
          key={Math.random() * 100}
          image={getdatao.Poster}
          name={getdatao.Title}
          year={getdatao.Year}
          />
        
        ))}
        </div>
   
  )
}

export default Items;