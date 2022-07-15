import {Link} from "react-router-dom";
import {default as Support} from "./support";
import {default as LangModal} from "../../Modal/langModal";

import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js';


export default function NavBar (){

  useEffect(() => {
  Array.from(document.querySelectorAll('a[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode))
 });
var popoverTriggerList = [].slice.call(document.querySelectorAll('a[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl,{html: true})
});

  const [show,setShow]= useState(false);
  const signupDropdown=(e)=>{
    console.log("Show");
    setShow(!show);
  }
  const signupHide=e=>{
    console.log("Hide");
    setShow(false);
  }

  // let navigate = useNavigate();
  let navigate = useNavigate();
    return(
<>

<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="/home"><span style={{color:"#FFA500"}}><img src="/assets/images/Logo2.png" height={'24px'} alt="FaceYourFood"/></span>  FaceYourFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="aboutus nav-link">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to ='/categories' className="popcat nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Popular Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/categories/bakery" className="dropdown-item" href="#services">Bakery</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item disabled" href="#prices">Seafood</a></li>
            <li><a className="dropdown-item disabled" href="#prices">Breakfast</a></li>
            <li><a className="dropdown-item disabled" href="#prices">Lunch</a></li>
            <li><a className="dropdown-item disabled" href="#prices">Dinner</a></li>
          </ul>
        </li>
        

      
      </ul>
      <div className="d-flex justify-content-end align-items-center" >
        <div className="me-5 fs-5">
           <a  tabIndex="0" data-bs-trigger="focus" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-html="true" data-bs-content='<div class="popover fs-6" role="tooltip">
 <div class="popover-body"><a href="#/" class="btn btn-lg btn-dark px-5 mx-5"> Signup</a><a href="#/" class="text-decoration-none text-dark px-5 mx-5"> My Account </a> <a href="#/" class="text-decoration-none text-dark text-align-left px-5 mx-5"> Not a member yet? Join here! </a></div></div>' className="signin text-decoration-none text-dark " type="button"><i className="bi bi-person mx-2"></i>  Sign In</a>
    
        <a href="#/2" className="menu text-decoration-none text-dark"><i className="bi bi-heart mx-2"></i>Favourites</a>
        {/* <a className="signin btn btn-primary text-white" href="#login" type="button"  ><i className="bi bi-person-circle"></i>  Forhet this</a> */}
        </div>
        <div className="btn-group dropstart me-5">
          
          <button id= "language" className="language btn btn-outline-success" type="submit">EN</button>
           <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
  </button>
 
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#prices">English</a></li>
          <li><a className="dropdown-item" href="#prices">Français</a></li>
          <li><hr className="dropdown-divider"/></li>
          <button type="button" className="btn btn-outline-secondary" onClick={()=>{
    navigate("/profile");}}>
              
              View More Language
          </button>
        </ul>

        </div>
      </div>


    </div>
  </div>
</nav>
<Support/>
</>
        

    )};

