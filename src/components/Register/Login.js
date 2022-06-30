export default function login(){
    return(

      <>
        <section className="login bg-light mb-5 pb-5" id="login">
        <div className="col-md-7 col-lg-8 mx-auto">
        <h2 className="mb-3 text-center"><strong>Get Started</strong></h2>
        <hr className="my-4"/>
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
          <button className="col align-self-start w-100 btn btn-primary btn-lg pb-3" type="submit">Login</button>
           <button className="col align-self-end w-10 btn btn-info btn-lg pb-2" type="button">Help &amp; Support</button>
           </div>
        </form>
      </div>
      </section>
       </>
    )
}