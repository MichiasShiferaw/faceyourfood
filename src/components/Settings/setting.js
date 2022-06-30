export default function Settings() {
    return (
<div>
                <div className="container">
    <section className="my-4 my-md-5">
      <div className="row align-items-center pt-0 pt-md-5">
        <div className="col-lg-9 col-8 col-6">
          <h2 className="py-2 py-md-3 mb-0">My Profile</h2>
        </div>
        <div className="col-lg-3 col-4 text-right">
          <a href="#0" className="btn btn-lg btn-primary px-4 px-md-5 text-uppercase">Save</a>
        </div>
      </div>
      <hr/>
      {/* <div className="d-flex flex-wrap pt-3 pt-md-5 pb-4 mb-2 align-items-center">
        <div className="profile sm-profile">
          <img src="assets/images/avatars/avatar12.png" alt="Avatar"/>
        </div>
        <div>
          <a href="#0" className="btn btn-lg btn-primary px-4 px-md-5 ml-2 ml-md-4">Change photo</a>
          <a href="#0" className="btn btn-lg btn-outline-dark px-4 px-md-5 ml-2 ml-md-4">Delete</a>
        </div>
      </div> */}
      <div className="row">
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
                            <input type="text" className="form-control" id="name" placeholder="e.g.Jane Doe"/>
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
                            <input type="password" className="form-control" id="password" defaultValue="......."/>
                            <span className="input-group-text">
                                
                                <i className="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
            </div>
            <div className="mt-3 mt-md-5 pt-2 pt-md-4 pb-1">
              <h3 className="text-center font-weight-semibold mb-3 mb-md-5">Connect Your Social Media to keep your friends and family up-to-date</h3>
                    <label htmlFor="email" className="form-label">Password:</label>
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
              <h6 className="f-size-20 inter-font font-weight-semibold mb-2 mb-md-4 pb-2">Newsletter</h6>
              <div className="d-md-flex align-items-center">
                <p className="mb-3">You are currently sunscribed to our newsletter</p>
                <div className="ml-auto mb-3">
                  <a href="#0" className="btn btn-lg btn-outline-dark px-4 px-md-5">Unsubscribe</a>
                </div>
              </div>
            </div>
            <hr className="my-4 my-md-5"/>
            <div className="d-flex align-items-center flex-wrap svg mb-4 mb-md-5">
              <a href="#0">
                <svg data-name="feather-icon/log-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <rect data-name="Bounding Box" width="24" height="24" fill="rgba(255,255,255,0)"></rect>
                  <path d="M3,20a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H7A1,1,0,0,1,7,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H7a1,1,0,1,1,0,2Zm10.293-4.293a1,1,0,0,1,0-1.414L16.586,11H7A1,1,0,1,1,7,9h9.586L13.293,5.707a1,1,0,1,1,1.414-1.414l5,5a1,1,0,0,1,0,1.415l-5,5a1,1,0,0,1-1.414,0Z" transform="translate(2 2)"></path>
                </svg>
                <span>Sign out</span>
              </a>
              <a href="#0" className="text-orange font-weight-medium ml-auto">Delete Account</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
                </div>
    )}