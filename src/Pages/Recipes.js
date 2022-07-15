import React from 'react'
import {Link,useParams, useNavigate, Navigate} from "react-router-dom";

import Assistance from '../components/Assistance/assistance';
import {default as RecipeComp} from '../components/RecipeComp/Recipe';
import { recipeTour } from '../components/Assistance/assist_data';
import Data from "../components/Data/RecipeDB.json";
function Recipes() {
  // console.log(props);
    let {meal} = useParams();
    let isValid = false;
    let mealName= meal.split("_").join(" ");
    {Object.keys(Data).map((muffin)=>{
      if (muffin===(mealName)){
        isValid=true;
      }
    
    }
    )}
    
  return (
    <div className='recipespage container'>
      {isValid?
      (<>
        <RecipeComp currRecipe={Data[mealName]}/>
        <Assistance page={recipeTour}/>
        </>):(<Navigate replace to="/" />)
        }
        </div>
  )
}

export default Recipes