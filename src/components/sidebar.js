// import {default as Checkout} from "./Checkout/checkout"
import {default as Options} from "./Checkout/Options"
//import {default as ConfirmModal} from './Modal/confirmModal';
//import {default as Recommended} from "./Booking/subsection";
function Sidebar () {
    return (
      <>

<div className="offcanvas offcanvas-end off-canvas-sm bg-light" data-bs-backdrop="false" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <nav id="navbar-2" className="navbar navbar-light bg-light m-0 ms-4">
  <button type="button" className="btn-close  btn-outline text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  <a href="#/">
              <img src="/assets/images/Logo.png" height={'60px'} alt="FaceYourFood"/>
            </a>
              <div className="justify-content-end col-md-4">
  <h1 className="navbar-brand text-wrap justify-content-end col-md-4" id="offcanvasLabel">Popular Categories</h1>
  </div>
  <ul className="nav nav-pills justify-content-center">

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Cuisine</a>
      <ul className="dropdown-menu">
        {/* <li><a className="dropdown-item disabled" href="#yourCart">Your Cart</a></li> */}
        {/* <li><a className="dropdown-item disabled" href="#carInfo">Car Info</a></li> */}
         <li><a className="dropdown-item disabled" href="#/">Italy</a></li>
         <li><a className="dropdown-item disabled" href="#/">China</a></li>
         <li><a className="dropdown-item disabled" href="#/">USA</a></li>

         <li><a className="dropdown-item disabled" href="#/">France</a></li>
         <li><a className="dropdown-item disabled" href="#/">Spain</a></li>
         <li><a className="dropdown-item disabled" href="#/">Mexico</a></li>
         <li><a className="dropdown-item disabled" href="#/">Japan</a></li>
         <li><a className="dropdown-item disabled" href="#/">India</a></li>
         <li><a className="dropdown-item disabled" href="#/">Thailand</a></li>
         <li><a className="dropdown-item disabled" href="#/">Greece</a></li>
      </ul>
    </li>

        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Restrict.</a>
      <ul className="dropdown-menu">
        {/* <li><a className="dropdown-item disabled" data-bs-toggle="collapse" data-bs-target="#select-Date" aria-expanded="true" aria-controls="select-Date" href="#selectDate">Select Date</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" data-bs-target="#select-Staff" aria-expanded="true" aria-controls="select-Staff"href="#selectStaff">Select Staff</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" data-bs-target="#select-Time" aria-expanded="true" aria-controls="select-Time"href="#selectTime">Select Time</a></li> */}
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Lactose intolerance</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Gluten intolerance</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Vegetarianism</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Veganism</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Kosher</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Keto</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Dairy-free</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Low carb</a></li>
        <li><a className="dropdown-item disabled" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Nut/Egg Allegies</a></li>
      </ul>
    </li>


        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Tags</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item disabled" href="#terms">Terms</a></li>
        <li><a className="dropdown-item disabled" href="#terms">5 Stars<i className="bi bi-star-fill"/></a></li>
        <li><a className="dropdown-item disabled" href="#terms">4 Stars<i className="bi bi-star-fill"/></a></li>
        <li><a className="dropdown-item disabled" href="#terms">3 Stars<i className="bi bi-star-fill"/></a></li>
      </ul>
    </li>



  </ul>

</nav>
  <div className="offcanvas-body">
    <Options/>
    {/* <Checkout/> */}
    
    {/* <Recommended/> */}
    <button className="btn btn-outline-primary btn-lg mb-2 ">
          More to be Added! 
        </button>
  </div>
</div>

</>
);
};

    export default Sidebar;
