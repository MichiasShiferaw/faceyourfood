import React from 'react'
import {useParams, Route,Routes, useNavigate} from "react-router-dom";
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
                  // console.log(index);
                    // return val;
                    descrips=categoriesPreview[index];
                }
              }
            )}
            // console.log(descrips);

  return (
    <div >

      {isValid ? 
        <>
        <PickMeal cuisine={descrips} /></>
        :<h2>Unfortunately this is not a valid page</h2>}
      <button onClick={() => navigate(-1)}>go back</button>

       
      <Routes>
        <Route path="/recipe" element={<Recipe />} />
      </Routes>

    </div>
  )
}

export default Mealoption