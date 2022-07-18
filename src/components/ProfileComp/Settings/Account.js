import { useEffect, useState } from "react";
import { useAuth,upload } from "../../../firebase-config"


export default function Account() {
    const [passwordShown, setPasswordShown]= useState(false);
const togglePassword = () => {
  setPasswordShown(!passwordShown);
};
  const user = useAuth();
  // console.log(user)
  const [photo,setPhoto]= useState(null);
  const [loading,setLoading]= useState(false);
  const [photoURL,setPhotoURL]= useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png")

  function handleChange(e){
    if(e.target.files[0]){
      setPhoto(e.target.files[0])
    }

  }

  function handleClick(){
    upload(photo,user,setLoading);
  }


  useEffect(()=>{
    if (user?.photoURL){
setPhotoURL(user.photoURL);
    }

  },[user])

    return (

<>
      <div className="row align-items-center pt-0 pt-md-5">
        <div className="col-lg-9 col-8 col-6">
          <h2 className="py-2 py-md-3 mb-0"><span className="py-2 py-md-3 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></span>My Account
<img className="pb-4 mb-2" src="/assets/images/avatar1.png" width="103.2px" height="108px" alt="Avatar"/>
<br/> <input className="h6" type="file" onChange={handleChange}/>
        <button className="btn m-0 btn-secondary" disabled={loading ||!photo}>Upload</button>
                 
          </h2>
          
                {/* <div className="mx-3"> */}

      {/* </div> */}
        </div>
        
        {/* <div className="d-flex flex-wrap pt-3 pt-md-5 pb-4 mb-2 align-items-center">
        <div className="profile sm-profile">
          
        </div>
        </div> */}
        <div className="col-lg-3 col-4 text-right">
          <a href="#0" className="btn btn-lg btn-primary px-4 px-md-5 text-uppercase">Save</a>
        </div>
      </div>
      <hr className="m-0" style={{ height: "5px",color:"black" }} />











      {/*Watch OUT!!!! */}

      <div className="row align-items-center">
        <div class="col-lg-2"></div>
        <div className="col-lg-8">
          <form className="mt-4">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group custom-form-group">
<label htmlFor="fullname" className="form-label">Full Name:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input type="text" className="form-control" id="name" placeholder="e.g.Jane Doe" />
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
                            <input type="email" className="form-control" id="email" placeholder="e.g. mario@example.com"/>
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
                                                        <input type={passwordShown ? "text" : "password"} className="form-control" id="password" defaultValue="12345"/>
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
            <div className="mt-3 mt-md-5 pt-2 pt-md-4 pb-1">
              <h3 className="text-center mb-3 mb-md-5">Connect your Social Media to keep your friends and family up-to-date</h3>
                    <label htmlFor="email" className="form-label">Facebook:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                               <i className="bi bi-facebook"></i>

                            </span>
                            <input type="text" className="form-control" id="facebookacc" placeholder="e.g. Jane Doe"/>
                            <span className="input-group-text">
                                
                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                                  <label htmlFor="email" className="form-label">Instagram:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-instagram"></i>
                            </span>
                            <input type="text" className="form-control" id="instagramacc"placeholder="e.g. Jane.Doe05"/>
                            <span className="input-group-text">
                                
                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
            </div>

            
            <div className="mt-3 mt-md-5">
              <h3 className="f-size-20 mb-2 mb-md-4 pb-2">Newsletter</h3>
              <div className="d-md-flex align-items-center">
                <img src="/assets/images/chef.gif" height={"80px"} alt="Cooking" />
                <h5 className="mb-3">You are currently sunscribed to our newsletter</h5>
                <div className="ml-auto mb-3">
                  <a href="#0" className="btn btn-lg btn-outline-dark mx-2 px-4 px-md-5">Unsubscribe</a>
                </div>
              </div>
            </div>
            <hr/>
          </form>
        </div>
        <div class="col-lg-2"></div>
      </div>
      </>
    )}