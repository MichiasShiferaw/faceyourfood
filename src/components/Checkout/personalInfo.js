export default function PersonalInfo () {
    return (
      <>
      <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label" >First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Joe" value="Joe" required/>
            </div>

            

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Smoe" value="Smoe" required/>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email </label>
              <div className="input-group has-validation">
              <span className="input-group-text">
                                <i className="bi bi-envelope-fill"></i>
                            </span>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value="you@example.com"required/>
              </div>
            </div>

            <div className="col-12">
                <div>
              <label htmlFor="number" className="form-label">Phone Number </label>
              <div className="input-group has-validation">
              <span className="input-group-text">
                                <i className="bi bi-telephone-fill"></i>
                            </span>
              <input type="tel" className="form-control" placeholder="(234)-567-8910" value="(234)-567-8910"required data-pattern="(***)-***-****"/>
              </div>
              </div>
            </div>
          </div>
      </>
    )};