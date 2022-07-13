import React, { useState } from "react";

function Newsletter() {
  var memo= "Enter email to join, must include @";
  
const [email, setEmail] = useState("");
  const onSubmit=(e)=>{
     e.preventDefault();
     console.log("Hi");
     console.log(email);
    //  memo=`${email} will be sent out shortly`;
  }
  return (
    <section className="newlettersect bg-light text-dark p-5">
      <div className="container">
        <div className="d-md-flex align-items-center">
          <h3 className="mb-3 mb-md-0">
            Love the content? <br /> Sign Up For FYF Newsletter
          </h3>
          <img src="/assets/images/chef.gif" height={"80px"} alt="Cooking" />
          {/* <form> */}
          <form className="input-group has-validation news-input ms-5" onSubmit={onSubmit}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
              onChange={(event)=>setEmail(event.target.value)}
            />
            <button
              className="btn btn-dark btn-lg"
              type="submit"
              onClick={() => {
                console.log("Signedup");
              }}
            >
              Add
            </button>
             <small class="w-100 ms-2 form-text text-muted">{memo}</small>
          {/* </div> */}
          </form>
          
          
        </div>
        <br/>
      </div>
    </section>
  );
}

export default Newsletter;
