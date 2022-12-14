import React from "react";
const Rs = (props) => {
  const { name, image, ingredientLines } = props;
  return (
  <div className="resMaincontainer" >
  <img src={image} className="" alt="human" />
  <div className="nameItem">
    <h5>{name}</h5>
  </div>
  <ul className="IngreItem">
    {ingredientLines.map(ingredient => (<li className="">{ingredient}</li>))}
  </ul>
</div>
      
  );
}

export default Rs;
