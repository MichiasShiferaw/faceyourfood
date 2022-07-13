import React from 'react'

import Assistance from '../components/Assistance/assistance';
import {default as RecipeComp} from '../components/RecipeComp/Recipe';
import { recipeTour } from '../components/Assistance/assist_data';
function Recipes() {
  return (
    <div className='recipespage container'>
        <RecipeComp/>
        <Assistance page={recipeTour}/>
        </div>
  )
}

export default Recipes