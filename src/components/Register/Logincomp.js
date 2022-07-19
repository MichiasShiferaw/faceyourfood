import React from 'react'
import { useTranslation } from "react-i18next";
function Logincomp() {
  const {t } = useTranslation(["homePage"]);
  return (

<>
    <h1 className="h3 mb-3 text-center fw-normal">{t("getStarted")}</h1>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">{t("emailAddress")}</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">{t("password")}</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">{t("join")}</button>
          <small className="text-muted">{t("agree")}</small>
          <hr className="my-4"/>
</>
  )
}


export default Logincomp