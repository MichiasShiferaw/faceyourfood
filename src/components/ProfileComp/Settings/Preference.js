import React from 'react'
import { AllLang } from "../../Data/Language";
import { useTranslation } from "react-i18next";
import { useEffect} from "react";
import i18next from "i18next";
function Preference() {
    const { i18n, t } = useTranslation(["common","profilePage"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};
  return (
    <div>
        <h3>{t("profilePage:manageWhat")}</h3>
        <p>{t("profilePage:chooseWhat")}</p>
        <hr/>

<div>

{t("profilePage:togglePre")}
<div className='fs-4'>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{t("profilePage:recommendRec")}</label>
    </div>

    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{t("profilePage:cookieEna")}</label>
    </div>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{t("profilePage:recordActivity")}</label>
    </div>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{t("profilePage:keepFav")}</label>
    </div>
    </div>
</div>
<hr/>
<div>
<div className="input-group pt-5 mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Choose the language</label>
  <select className="form-select" id="inputGroupSelect01" value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}>
    
    <option selected>Choose...</option>

    <option value="en">English</option>
    <option value="fr">Français</option>
    <option value="es">Spanish</option>
    <option value="nothing"disabled>-------NA-------</option>
    {AllLang.map((recipe,index)=>(
        <option key={index} value={recipe.title} className="col-4" title={recipe.title} disabled>
              {recipe.title}

        </option>))}
  </select>
  <button className='btn btn-lg btn-primary'>{t("profilePage:save")}</button>
  <small className="w-100 ms-2 form-text text-muted">{t("profilePage:selectLang")}</small>
</div>

</div>
    </div>
  )
}

export default Preference