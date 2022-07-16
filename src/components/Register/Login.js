// import { useState } from "react";
// import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
// import { auth } from "../../firebase-config";

import { useRef, useState,useEffect } from "react";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js';
import { signup, login, logout, useAuth } from "../../firebase-config";
import {useTranslation} from "react-i18next";
export default function Login(){
  const {t} = useTranslation(["homePage"]);



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

    useEffect(() => {
  Array.from(document.querySelectorAll('a[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode))
 });

  const [passwordShown, setPasswordShown]= useState(false);
const togglePassword = () => {
  setPasswordShown(!passwordShown);
};
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
        <h2 className="mb-3 text-center"><strong>{t("getStarted")}</strong></h2>
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
<label htmlFor="fullname" className="form-label">{t("fullName")}:</label>
                        <div className="mb-4 input-group">
                          <a type="button"  href="#/0" data-bs-toggle="tooltip" title="Enter Name">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            </a>
                            <input type="text" className="form-control" id="name" 
                            
                              
                              placeholder="e.g.Jane Doe"/>
                              {/* onChange={(event)=>{setRegisterName(event.target.value);}} */}
                            <a type="button"  href="#/0" data-bs-toggle="tooltip" title="Enter your first and last name (Not case sensitive)">
                            <span className="input-group-text">

                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                            </a>
                        </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
<label htmlFor="username" className="form-label">{t("username")}:</label>
                        <div className="mb-4 input-group">
                           <a type="button"  href="#/0" data-bs-toggle="tooltip" title="Enter Username"><span className="input-group-text">
                                <i className="bi bi-at"></i>
                            </span>
                            </a>
                            <input type="text" className="form-control" id="username" placeholder="e.g. mario@example.com"/>
                            
                            <a type="button"  href="#/0" data-bs-toggle="tooltip" title="Username can only include letters and numbers"><span className="input-group-text">
                              
                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                            </a>
                        </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
<label htmlFor="email" className="form-label">{t("emailAddress")}:</label>
                        <div className="mb-4 input-group">
                            <a type="button"  href="#/0" data-bs-toggle="tooltip" title="Enter Email"><span className="input-group-text">
                                <i className="bi bi-envelope-fill"></i>
                            </span>
                            </a>
                            <input type="email" className="form-control" id="email" ref={emailRef} placeholder="e.g. mario@example.com"/>
                            <a type="button"  href="#/0" data-bs-toggle="tooltip" title="Only valid emails will be accepted"><span className="input-group-text">

                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                            </a>
                        </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
                    <label htmlFor="password" className="form-label">{t("password")}:</label>
                        <div className="mb-4 input-group">
                            <a type="button"  href="#/0" data-bs-toggle="tooltip" title="Enter Password"><span className="input-group-text">
                                <i className="bi bi-key-fill"></i>
                            </span>
                            </a>
                            <input type={passwordShown ? "text" : "password"} className="form-control" id="password" ref={passwordRef} defaultValue="12345"/>
                            <span className="input-group-text" onClick={togglePassword}>
                            {passwordShown?
                            (<i className="bi bi-eye text-muted"></i>
                           ):(<i className="bi bi-eye-slash text-muted"></i>
                            )
                            }
                            </span>
                            
                        </div>
                </div>
              </div>
            </div>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" htmlFor="save-info">{t("agree")}</label>
          </div>
        </div>
      </div>
    </section>
    </div>
    <div className="">
          <button className="col align-self-start w-100 btn btn-primary btn-lg pb-3" onClick={handleSignup}>{t("login")}</button>
           </div>
        </form>
        </>}
      </div>
      </section>
       </>
    )
}