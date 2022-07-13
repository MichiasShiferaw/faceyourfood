import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import Settings from '../components/ProfileComp/index';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

function Profile() {
    let navigate = useNavigate();
    let {username} = useParams();
  return (
     <div>This is the {username}'s profile page
   <div>
    {/* onAuthStateChanged(auth, (user) => {
      {{user && <Settings/>}}
    }) */}
<Settings/>
</div>


    
//   {/* // if (user) {
//   //   // User is signed in, see docs for a list of available properties
//   //   // https://firebase.google.com/docs/reference/js/firebase.User
//   //   const uid = user.uid;
//   //    <Settings/>
//   // else */}
{/* //   //   // User is signed out
//   //   // ...
//   // } */}

 <button
onClick={()=>{
    navigate("/about");
}}>
    Change to about page
</button>


    </div> 
  )
}

export default Profile