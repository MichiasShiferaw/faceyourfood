import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Login() {
    let {id1} = useParams();
    console.log(id1)
    let isLogin= true;
    if (id1!=1){
        isLogin=false;
    }
  return (<>
  <div className=' bg-light row my-5 g-0 align-items-center justify-content-center pb-5'>
    <div class="col-8 col-lg-4 col-xl-3">
        <img className="img-fluid" src="/assets/images/chef.gif"/>
    </div>
    <div class="col-9 col-lg-4">
 <form>
             <img class="mb-4 d-block mx-auto" src="/assets/images/faceYourFood.png" alt="" width="72" height="57"/>
{isLogin?(<Loginform/>):(<Signupform/>)
    }
             </form>

    </div>
   
    
    <div class="col-8 col-lg-4 col-xl-3">
        <img className="img-fluid" src="/assets/images/chef2.gif"/>
    </div>
    </div> 
    </>
  )
}

export default Login


 function Loginform() {
  return (

<>
    <h1 class="h3 mb-3 text-center fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"/>
      <label htmlFor="emailInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="passwordInput" placeholder="123456"/>
      <label htmlFor="passwordInput">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember"/> Remember me For Future Events
      </label>
    </div>
    <p class="mt-5 mb-3 text-muted">Don't have an Account</p>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </>

  )
}

function Signupform() {
  return (

<>
    <h1 class="h3 mb-3 text-center fw-normal">Get Started/ Register</h1>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          <hr class="my-4"/>
</>
  )
}