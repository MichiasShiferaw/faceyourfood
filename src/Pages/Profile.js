import React from 'react'
import {useNavigate} from "react-router-dom";
import Settings from '../components/ProfileComp/profileindex';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

function Profile() {
    let navigate = useNavigate();
  return (
     <div className='myprofile container'>

    {/* onAuthStateChanged(auth, (user) => {
      {{user && <Settings/>}}
    }) */}
<Settings/>


  {/* // if (user) {
//   //   // User is signed in, see docs for a list of available properties
//   //   // https://firebase.google.com/docs/reference/js/firebase.User
//   //   const uid = user.uid;
//   //    <Settings/>
//   // else */}
{/* //   //   // User is signed out
//   //   // ...
//   // } */}

 {/* <button
onClick={()=>{
    navigate("/about");
}}>
    Change to about page
</button> */}


    </div> 
  )
}

export default Profile