// import { useState } from "react";
// import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
// import { auth } from "../../firebase-config";

import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../../firebase-config";

export default function Login(){



  // const [registerEmail,setRegisterEmail]= useState("");
  // const [registerPassword, setRegisterPassword]=useState("");
  // const [registerUserName, setRegisterUserName]= useState("");
  // const [registerName, setRegisterName]= useState("");



  // const [user,setUser]= useState({});

  // onAuthStateChanged(auth,(currentUser)=>{
  //   setUser(currentUser);
  // })



  // const register=async ()=>{
  //   try{
  //   const user= await createUserWithEmailAndPassword(
  //     auth, 
  //     registerEmail,
  //     registerPassword
  //   );
  //   console.log(user)
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  // };

  //---------------------------------------------------------------------------


  // const login= async()=>{
  //   try{
  //   const user= await signInWithEmailAndPassword(
  //     auth, 
  //     registerEmail,
  //     registerPassword
  //   );
  //   console.log(user)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      console.log(emailRef?.current.value);
    } catch {
      console.log("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      console.log("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      console.log("Error!");
    }
    setLoading(false);
  }



    return(

      <>
        <section className="login mb-5 pb-5" id="login">
        <div className="col-md-7 col-lg-8 mx-auto">
        <h2 className="mb-3 text-center"><strong>Get Started</strong></h2>
        <hr className="my-4"/>
        {!currentUser&&
        <>
        <form className="needs-validation" noValidate="">
          <div className="container">
    <section className="my-4 my-md-5">
      <div className="row">
        <div className="col-lg-12">
          {/* <form className="mt-4"> */}
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
<label htmlFor="fullname" className="form-label">Full Name:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input type="text" className="form-control" id="name" 
                            
                              
                              placeholder="e.g.Jane Doe"/>
                              {/* onChange={(event)=>{setRegisterName(event.target.value);}} */}
                            <span className="input-group-text">

                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
<label htmlFor="username" className="form-label">Username:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-at"></i>
                            </span>
                            <input type="text" className="form-control" id="username" placeholder="e.g. mario@example.com"/>
                            <span className="input-group-text">

                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
<label htmlFor="email" className="form-label">Email Address:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope-fill"></i>
                            </span>
                            <input type="email" className="form-control" id="email" ref={emailRef} placeholder="e.g. mario@example.com"/>
                            <span className="input-group-text">

                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
                    <label htmlFor="email" className="form-label">Password:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-key-fill"></i>
                            </span>
                            <input type="password" className="form-control" id="password" ref={passwordRef} defaultValue="......."/>
                            <span className="input-group-text">
                                <i className="bi bi-question-circle text-muted"></i>
                            </span>
                        </div>
                </div>
              </div>
            </div>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" htmlFor="save-info">I have read and agree with the <strong>Terms</strong> &amp; <strong>Privacy Policy</strong></label>
          </div>
          {/* </form> */}
        </div>
      </div>
    </section>
    </div>
    <div className="">
          <button className="col align-self-start w-100 btn btn-primary btn-lg pb-3" onClick={handleSignup}>Login</button>
           </div>
        </form>
        </>}
      </div>
      </section>
       </>
    )
}