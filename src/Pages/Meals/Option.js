import React from 'react'
import {useParams, Route,Routes, useNavigate} from "react-router-dom";
import PickMeal from '../../components/Booking/pickaMeal';
import {categoriesPreview } from '../../components/Data/Data';
import Recipe from '../../components/RecipeComp/Recipe';


const Mealoption= () => {
  let navigate = useNavigate();
  let {cato} = useParams();
   let isValid = false;
   let descrips="";
  {categoriesPreview.map((val,index)=>{
                if(val.title.toLowerCase().includes(cato)){
                  console.log(isValid);
                  isValid=true;
                  console.log(index);
                    // return val;
                    descrips=categoriesPreview[index].description;
                }
              }
            )}
            console.log(descrips);

  return (
    <div >

      {isValid ? 
        <>
        <PickMeal desc={descrips} title1={cato.toUpperCase()} /></>
        :<h2>Unfortunately this is not a valid page</h2>}
      <button onClick={() => navigate(-1)}>go back</button>

       
      <Routes>
        <Route path="/recipe" element={<Recipe />} />
      </Routes>

    </div>
  )
}

export default Mealoption