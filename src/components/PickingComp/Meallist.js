import React from "react";
import Meal from "./Meal";
import Data from '../Data/RecipeDB.json';

const Meallist = (props) => {
  

  const { meals } = props;

   const cus= (props["cuisine"]);

  const renderMeals = meals.map((choice) => {
    return (
       <li key={choice.id}>
         <Meal title={choice} cuisine={cus}/>
       </li>
     );
  }
  );
  return <ul>{renderMeals}</ul>;
};

export default Meallist;
