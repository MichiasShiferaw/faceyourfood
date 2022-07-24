import React, { useState } from "react";
import {useTranslation} from "react-i18next";

function Newsletter() {
    const {t} = useTranslation(["homePage"]);
  
const [email, setEmail] = useState("");
  const onSubmit=(e)=>{
     e.preventDefault();
     console.log(email);
    //  memo=`${email} will be sent out shortly`;
  }
  return (
    <section className="newlettersect bg-light text-dark p-5">
      <div className="container">
        <div className="d-md-flex align-items-center">
          <h3 className="mb-3 mb-md-0">
            {t("newletter")} <br /> {t("newletter2")}
          </h3>
          <img src="/assets/images/chef.gif" height={"80px"} alt="Cooking" />
          {/* <form> */}
          <form className="input-group has-validation news-input ms-5" onSubmit={onSubmit}>
            <input
              type="email"
              className="form-control"
              placeholder={t("enterEmail2")}
              required
              onChange={(event)=>setEmail(event.target.value)}
            />
            <button
              className="btn btn-lg bg-forgreen text-grite"
              type="submit"
              onClick={() => {
                console.log("Signedup");
              }}
            >
              {t("join")}
            </button>
             <small className="w-100 ms-2 form-text text-muted">{t("enterEmail")}</small>
          {/* </div> */}
          </form>
          
          
        </div>
        <br/>
      </div>
    </section>
  );
}

export default Newsletter;
