import React from 'react'
import {useParams, Route,Routes} from "react-router-dom";
import Pickmuffin from '../../components/Booking/pickaMuffinMeal';
import Recipe from '../../components/Booking/Recipe';
// import Subsection from '../../components/Booking/subsection';


function Options1() {
    // let navigate = useNavigate();
    let {cato} = useParams();
  return (
    <div>These are the {cato}'s options
    {/* <button
onClick={()=>{
    navigate("/bakery/oatmealmuffin");
}}>
    Change to about page
</button> */}
   <Pickmuffin/>
<Routes>
        <Route path="/recipe" element={<Recipe />} />
      </Routes>

    </div>
  )
}

export default Options1