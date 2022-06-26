import React from 'react'
import {useNavigate, useParams, Route,Routes} from "react-router-dom";
// import Pickmuffin from '../components/Booking/pickaMuffinMeal';
// import Recipe from '../components/Booking/Recipe';
import Subsection from '../components/Booking/subsection';


function Categories() {
    let navigate = useNavigate();
    let {cato} = useParams();
  return (
    <div>This is the {cato}'s Categories page12
    <Subsection/>
<button
onClick={()=>{
    navigate("/about");
}}>
    Change to about page
</button>

    </div>
  )
}

export default Categories