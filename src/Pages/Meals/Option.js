import React from 'react'
import {useNavigate, useParams, Route,Routes} from "react-router-dom";
import Pickmuffin from '../../components/Booking/pickaMuffinMeal';
import Recipe from '../../components/Booking/Recipe';
import Subsection from '../../components/Booking/subsection';


function Categories() {
    let navigate = useNavigate();
    let {cato} = useParams();
  return (
    <div>These are the {cato}'s options
   <Pickmuffin/>
<Routes>
        <Route path="recipe" element={<Recipe />} />
      </Routes>

    </div>
  )
}

export default Categories