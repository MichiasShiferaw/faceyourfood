import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import Subsection from '../../components/PickingComp/subsection';



function Categories() {
    let navigate = useNavigate();
    let {cato} = useParams();
  return (
    <div>
      
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