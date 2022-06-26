import {default as Checkout} from "./Checkout/checkout"
import {default as Options} from "./Checkout/Options"
//import {default as ConfirmModal} from './Modal/confirmModal';
//import {default as Recommended} from "./Booking/subsection";
function Sidebar () {
    return (
      <>

<div className="offcanvas offcanvas-end off-canvas-sm" data-bs-backdrop="false" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <nav id="navbar-2" className="navbar navbar-light bg-light m-0 ms-2">
  <h1 className="navbar-brand m-0" id="offcanvasLabel">My Carts</h1>
  <ul className="nav nav-pills">

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Cuisine</a>
      <ul className="dropdown-menu">
        {/* <li><a className="dropdown-item" href="#yourCart">Your Cart</a></li> */}
        {/* <li><a className="dropdown-item" href="#carInfo">Car Info</a></li> */}
         <li><a className="dropdown-item" href="#/">Italy</a></li>
         <li><a className="dropdown-item" href="#/">China</a></li>
         <li><a className="dropdown-item" href="#/">USA</a></li>

         <li><a className="dropdown-item" href="#/">France</a></li>
         <li><a className="dropdown-item" href="#/">Spain</a></li>
         <li><a className="dropdown-item" href="#/">Mexico</a></li>
         <li><a className="dropdown-item" href="#/">Japan</a></li>
         <li><a className="dropdown-item" href="#/">India</a></li>
         <li><a className="dropdown-item" href="#/">Thailand</a></li>
         <li><a className="dropdown-item" href="#/">Greece</a></li>
      </ul>
    </li>

        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Restrict.</a>
      <ul className="dropdown-menu">
        {/* <li><a className="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Date" aria-expanded="true" aria-controls="select-Date" href="#selectDate">Select Date</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Staff" aria-expanded="true" aria-controls="select-Staff"href="#selectStaff">Select Staff</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Time" aria-expanded="true" aria-controls="select-Time"href="#selectTime">Select Time</a></li> */}
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Lactose intolerance</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Gluten intolerance</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Vegetarianism</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Veganism</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Kosher</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Keto</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Dairy-free</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Low carb</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" aria-expanded="true" href="#selectTime">Nut/Egg Allegies</a></li>
      </ul>
    </li>


        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Tags</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#personalInfo">Personal Info</a></li>
        <li><a className="dropdown-item" href="#terms">Terms</a></li>
        <li><a className="dropdown-item" href="#terms">5 Stars<i className="bi bi-star-fill"/></a></li>
        <li><a className="dropdown-item" href="#terms">4 Stars<i className="bi bi-star-fill"/></a></li>
        <li><a className="dropdown-item" href="#terms">3 Stars<i className="bi bi-star-fill"/></a></li>
      </ul>
    </li>


  </ul>
  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</nav>
  <div className="offcanvas-body">
    <Options/>
    {/* <Checkout/> */}
    
    {/* <Recommended/> */}
  </div>
</div>

</>
);
};

    export default Sidebar;
