
import React from 'react'

const Result = (props) => {
  const {image, name, year } = props;
   return (
    
        <div className='resultcontainer'>
          
            <div className='resultcontainername'>
              {name}
              </div>
              <div className='resultcontainerimg'> <img src={image} alt="items view" className='imageicon' /></div>
            <div className='resultcontaineryear'>
              ({year})
            </div>
        </div>
    
  )
}

export default Result;