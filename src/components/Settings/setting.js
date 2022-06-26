export default function Settings() {
    return (
<div>
                <div class="container">
    <section class="my-4 my-md-5">
      <div class="row align-items-center pt-0 pt-md-5">
        <div class="col-lg-9 col-8 col-6">
          <h2 class="py-2 py-md-3 mb-0">My Profile</h2>
        </div>
        <div class="col-lg-3 col-4 text-right">
          <a href="#0" class="btn btn-lg btn-primary px-4 px-md-5 text-uppercase">Save</a>
        </div>
      </div>
      <hr/>
      <div class="d-flex flex-wrap pt-3 pt-md-5 pb-4 mb-2 align-items-center">
        <div class="profile sm-profile">
          <img src="assets/images/avatars/avatar12.png" alt="Avatar"/>
        </div>
        <div>
          <a href="#0" class="btn btn-lg btn-primary px-4 px-md-5 ml-2 ml-md-4">Change photo</a>
          <a href="#0" class="btn btn-lg btn-outline-dark px-4 px-md-5 ml-2 ml-md-4">Delete</a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <form class="mt-4">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
<label for="fullname" class="form-label">Full Name:</label>
                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-person-fill"></i>
                            </span>
                            <input type="text" class="form-control" id="name" placeholder="e.g.Jane Doe"/>
                            <span class="input-group-text">
                                
                                <i class="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
<label for="username" class="form-label">Username:</label>
                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-at"></i>
                            </span>
                            <input type="text" class="form-control" id="username" placeholder="e.g. mario@example.com"/>
                            <span class="input-group-text">
                                
                                <i class="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
<label for="email" class="form-label">Email Address:</label>
                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-envelope-fill"></i>
                            </span>
                            <input type="email" class="form-control" id="email" placeholder="e.g. mario@example.com"/>
                            <span class="input-group-text">
                                
                                <i class="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group custom-form-group">
                    <label for="email" class="form-label">Password:</label>
                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-key-fill"></i>
                            </span>
                            <input type="password" class="form-control" id="password" defaultValue="......."/>
                            <span class="input-group-text">
                                
                                <i class="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                </div>
              </div>
            </div>
            <div class="mt-3 mt-md-5 pt-2 pt-md-4 pb-1">
              <h3 class="text-center font-weight-semibold mb-3 mb-md-5">Connect Your Social Media to keep your friends and family up-to-date</h3>
                    <label for="email" class="form-label">Password:</label>
                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                               <i class="bi bi-facebook"></i>

                            </span>
                            <input type="text" class="form-control" id="facebookacc" placeholder="e.g. Jane Doe"/>
                            <span class="input-group-text">
                                
                                <i class="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
                                  <label for="email" class="form-label">Instagram:</label>
                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-instagram"></i>
                            </span>
                            <input type="text" class="form-control" id="instagramacc"placeholder="e.g. Jane.Doe05"/>
                            <span class="input-group-text">
                                
                                <i class="bi bi-question-circle text-muted"></i>

                            </span>
                        </div>
            </div>
            <div class="mt-3 mt-md-5">
              <h6 class="f-size-20 inter-font font-weight-semibold mb-2 mb-md-4 pb-2">Newsletter</h6>
              <div class="d-md-flex align-items-center">
                <p class="mb-3">You are currently sunscribed to our newsletter</p>
                <div class="ml-auto mb-3">
                  <a href="#0" class="btn btn-lg btn-outline-dark px-4 px-md-5">Unsubscribe</a>
                </div>
              </div>
            </div>
            <hr class="my-4 my-md-5"/>
            <div class="d-flex align-items-center flex-wrap svg mb-4 mb-md-5">
              <a href="#0">
                <svg data-name="feather-icon/log-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <rect data-name="Bounding Box" width="24" height="24" fill="rgba(255,255,255,0)"></rect>
                  <path d="M3,20a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H7A1,1,0,0,1,7,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H7a1,1,0,1,1,0,2Zm10.293-4.293a1,1,0,0,1,0-1.414L16.586,11H7A1,1,0,1,1,7,9h9.586L13.293,5.707a1,1,0,1,1,1.414-1.414l5,5a1,1,0,0,1,0,1.415l-5,5a1,1,0,0,1-1.414,0Z" transform="translate(2 2)"></path>
                </svg>
                <span>Sign out</span>
              </a>
              <a href="#0" class="text-orange font-weight-medium ml-auto">Delete Account</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
                </div>
    )}