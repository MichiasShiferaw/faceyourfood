import { useTranslation } from "react-i18next";
import React from 'react';
import { useParams} from "react-router-dom";
import Logincomp from '../components/Register/Logincomp';

function Login() {
  
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
    <div className="col-md-4 text-center d-none d-md-block">
        <img alt="logo" className="img-fluid" src="/assets/images/chef.gif"/>
    </div>
    <div className="col-md-6 text-center text-md-start">
 <form>
             {/* <img className="mb-4 d-block mx-auto" src="/assets/images/faceYourFood.png" alt="" width="72" height="57"/> */}
{isLogin?(<Logincomp/>):(<Signupform/>)
    }
             </form>

    </div>
    </div> 
    </div>
    </>
  )
}

export default Login


//  function Loginform() {
//   return (

// <>
//     <h1 className="h3 mb-3 text-center fw-normal">Please sign in</h1>

//     <div className="form-floating">
//       <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
//       <label htmlFor="emailInput">Email address</label>
//     </div>
//     <div className="form-floating">
//       <input type="password" className="form-control" id="passwordInput" placeholder="123456"/>
//       <label htmlFor="passwordInput">Password</label>
//     </div>

//     <div className="checkbox mb-3">
//       <label>
//         <input type="checkbox" value="remember"/> Remember me For Future Events
//       </label>
//     </div>
//     <p className="mt-5 mb-3 text-muted">Don't have an Account</p>
//     <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//   </>

//   )
// }

function Signupform() {
  const {t } = useTranslation(["homePage"]);
  return (

<>
    <h1 className="h3 mb-3 text-center fw-normal">{t("getStarted")}</h1>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">{t("emailAddress")}</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">{t("password")}</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">{t("join")}</button>
          <small className="text-muted">{t("agree")}</small>
          <hr className="my-4"/>
</>
  )
}