import {Link} from "react-router-dom";
import {default as Support} from "./support";
import {useNavigate} from "react-router-dom";
import { useEffect} from "react";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function NavBar (){


  const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
    if (e.target.value==="other"){
      navigate("/profile/preference");
    }
		i18n.changeLanguage(e.target.value);
	};

  useEffect(() => {
  Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode))
 });
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl,{html: true})
});

  // let navigate = useNavigate();
  let navigate = useNavigate();
    return(
<>

<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="/home"><span style={{color:"#FFA500"}}><img src="/assets/images/Logo2.png" height={'24px'} alt="FaceYourFood"/></span>  {t("faceyourfood")}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">{t("home")}</Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="aboutus nav-link">{t("aboutUs")}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to ='/categories' className="popcat nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {t("popularcategories")}
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/categories/thai" className="dropdown-item">Thai</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to="categories/sandwiches"  className="dropdown-item" >Sandwiches</Link></li>
            <li><Link to="categories/desserts" className="dropdown-item" href="#prices">Desserts</Link></li>
            <li><a className="dropdown-item disabled" href="#prices">Pizza</a></li>
            <li><a className="dropdown-item disabled" href="#prices">Chicken</a></li>
          </ul>
        </li>
        

      
      </ul>

					<ul className="navbar-nav ms-auto me-2 mt-1 fs-5">
            <li className="nav-item">
          <select className="nav-link bg-light border-0 ms-1 me-2 mt-1" value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">Fran??ais</option>
            <option value="es">Spanish</option>
            <option value="other" >
              
              Others
          </option>
            </select>
                 </li>     
          

        <li className="nav-item fs-5">
           <a href="/#" tabIndex="0" data-bs-trigger="focus" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-html="true" 
           data-bs-content='<div class="popover fs-6" role="tooltip">
 <div class="popover-body bg-light px-2"><button type="button" class="btn btn-primary"disabled>Toggle PopOver</button><a href="/sign/1" type="button" class="btn btn-lg btn-dark px-5" rounded-3> Signup</a><a href="/profile/account" class="text-decoration-none text-align-center text-center text-dark"> My Account </a> <br/> <a href="/signin/register" class="small text-dark text-align-center text-center"> Not a member yet? Join here! </a></div></div>' 
 className="signin text-decoration-none nav-link" type="button"><i className="bi bi-person mx-2"></i>  {t("signin")}</a>
    </li>
    <li className="nav-item fs-5">
        <a href="/profile/favourite" className="nav-link menu text-decoration-none"><i className="bi bi-heart mx-2"></i>{t("favourites")}</a>
				</li>
        </ul>


    </div>
  </div>
</nav>
<Support/>

</>
        

    )};

  