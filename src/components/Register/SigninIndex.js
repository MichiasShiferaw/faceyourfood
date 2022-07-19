import React from 'react'
import { useTranslation } from "react-i18next";
import { Outlet, useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
function SigninIndex() {
  let {id1} = useParams();
    console.log(id1)
    let isLogin= true;
    if (id1!==1){
        isLogin=true;
    }
    console.log(isLogin);
  return (<>
  
  <div className='myhome container'>
  <div className="row justify-content-center align-items-center">
    <Link to="/signin/register">Register</Link>
    <Link to="/signin/login">Register</Link>
    <div className="col-md-4 text-center d-none d-md-block">
        <img alt="logo" className="img-fluid" src="/assets/images/chef.gif"/>
    </div>
    <div className="col-md-6 text-center text-md-start">
 <form>
             {/* <img className="mb-4 d-block mx-auto" src="/assets/images/faceYourFood.png" alt="" width="72" height="57"/> */}
<Outlet/>
             </form>

    </div>
    </div> 
    </div>
    </>
  )
}

export default SigninIndex