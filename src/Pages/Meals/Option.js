import React from 'react'
import {useParams, Route,Routes, Link, useNavigate} from "react-router-dom";
import PickMeal from '../../components/Booking/pickaMeal';
import { categoriesOpt } from '../../components/Data/Data';
import Recipe from '../../components/RecipeComp/Recipe';


const Mealoption= () => {
  let navigate = useNavigate();
  let {cato} = useParams();
  let isValid = categoriesOpt.includes(cato);

  return (
    <div >
      {/* <button className='btn btn-outline-primary'>Hi</button> */}

      {isValid ? 
        <>
        {/* <h1>{cato}</h1> */}
        <PickMeal title1={cato.toUpperCase()} /></>
        :<h2>Unfortunately this is not a valid page</h2>}
      <button onClick={() => navigate(-1)}>go back</button>

       
      <Routes>
        <Route path="/recipe" element={<Recipe />} />
      </Routes>

    </div>
  )
}

export default Mealoption