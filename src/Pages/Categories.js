import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import Subsection from '../components/Booking/subsection';


function Categories() {
    let navigate = useNavigate();
    let {cato} = useParams();
  return (
    <div>This is the {cato}'s Categories page
    <Subsection/>
<button
onClick={()=>{
    navigate("/about");
}}>
    Dumby Button
</button>

    </div>
  )
}

export default Categories