import React from 'react'
import {useParams, Route,Routes, useNavigate, Navigate} from "react-router-dom";
//import Beginningcomp from '../components/PickingComp/Beginningcomp';
import Beginningcomp from '../../components/PickingComp/Beginningcomp';
import PickMeal from '../../components/PickingComp/pickaMeal';
import {categoriesPreview } from '../../components/Data/Data';
import Recipe from '../../components/RecipeComp/Recipe';


const Mealoption= () => {
  let navigate = useNavigate();
  let {cato} = useParams();
   let isValid = false;
   let descrips="";
  {categoriesPreview.map((val,index)=>{
                if(val.title.toLowerCase().includes(cato)){
                  isValid=true;
                    descrips=categoriesPreview[index];
                }
              }
            )}

  return (
    <div className='mealOption container'>

      {isValid ? 
        <>
        {/* <PickMeal /></> */}
        {/* <PickMeal cuisine={descrips} /></> */}
         <Beginningcomp cuisine={descrips} /></> 
        
        :<Navigate replace to="/404Error" />}
      {/* <button onClick={() => navigate(-1)}>go back</button> */}

       {/*  */}
      <Routes>
        <Route path="/recipe" element={<Recipe />} />
      </Routes>

    </div>
  )
}

export default Mealoption