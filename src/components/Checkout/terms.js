

export default function Terms () {
    return (
      <>
      <div style={{textAlign:"start"}}className="text-align-start">
      <div className="form-check">
            <input type="checkbox" className="form-check-input" id="majority-age"defaultChecked required/>
            <label className="form-check-label" htmlFor="majority-age">I am over the age of 18.<span className="text-danger">*</span></label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="license" defaultChecked required/>
            <label className="form-check-label" htmlFor="license">I have a valid driver's license<span className="text-danger">*</span></label>
          </div>

                    <div className="form-check">
            <input type="checkbox" className="form-check-input" id="agree-terms" defaultChecked required/>
            <label className="form-check-label" htmlFor="agree-terms">I agree to Car Doctor's <a href='#/'>Privacy Policy</a>, <a href='#/'>Terms of Service</a>.<span className="text-danger">*</span></label>
            </div>
           <div className="form-check">
            <input type="checkbox" className="form-check-input" id="agree-marketing"defaultChecked/>
            <label className="form-check-label" htmlFor="agree-marketing">I agree to receive marketing notifications with offers and news</label>
          </div>
          
          </div>
          <span> <span className="text-danger">*</span> Required </span>
          </>
    )
};