import React from "react";
import Rs from "./Rs";

 const Items = (props) => {
    const { recipes } = props;
  return (
    <div className="itemContainer">
      { recipes.map(recipe => (
        <Rs
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
       ))}
    </div>
  );
}

export default Items;
