import React from 'react'
// import { useTranslation } from "react-i18next";
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
 
  <div className="row justify-content-center align-items-center">
    
    
    <div className="col-md-4 text-center d-none d-md-block">
        <img alt="logo" className="img-fluid" src="/assets/images/chef.gif"/>
    </div>
    <div className="col-md-6 text-center text-md-start">
 <form>
             {/* <img className="mb-4 d-block mx-auto" src="/assets/images/faceYourFood.png" alt="" width="72" height="57"/> */}
<div className='text-center'>
             <Link to="/signin/register" className='mx-5 btn btn-lg btn-outline-info text-decoration-none text-grite'><strong>Register</strong></Link>
    <Link to="/signin/login" className='mx-5 btn btn-lg btn-outline-secondary text-decoration-none text-grite'><strong>Login</strong></Link>
    </div>
<Outlet/>
             </form>

    </div>
    </div> 
    </>
  )
}

export default SigninIndex