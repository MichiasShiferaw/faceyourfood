import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import Settings from '../components/Settings/setting';

function Profile() {
    let navigate = useNavigate();
    let {username} = useParams();
  return (
    // <div>This is the {username}'s profile page

    <Settings/>
/* <button
onClick={()=>{
    navigate("/about");
}}>
    Change to about page
</button>


    </div> */
  )
}

export default Profile