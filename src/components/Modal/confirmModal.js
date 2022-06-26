// import PersonalInfo from "../Checkout/personalInfo";
// import { CarComponent } from "../Checkout/Car/carComponent";
import React, { Component } from "react";

export class ConfirmModal extends Component {
  somefunction(){
    return (null)
  }
  render(){
    return (
              <>
              {this.somefunction()}


<div className="modal fade" data-bs-keyboard="false" data-bs-backdrop="static"id="ModalToggle" aria-hidden="true" aria-labelledby="ModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ModalToggleLabel">Confirmation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Please Confirm by Proceeding
        <br/>
        Name: {this.props.firstName} {" "} {this.props.lastName}
        <br/>
        Email: {this.props.email}
        <br/>
        Phone Number: {this.props.phoneNumber}
        <br/>
        Car Information
        <hr/>
        Year: {this.props.year1}
        <br/>
        Make:{this.props.make1}
        <br/>
        Model:{this.props.model1}
        {/* {console.log(CarComponent).state} */}
         <br/>
        Price:{this.props.price}
      </div>
      <div className="modal-footer">
        <a className="btn btn-success" data-bs-target="#ModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Confirm</a>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" data-bs-keyboard="false" data-bs-backdrop="static" id="ModalToggle2" aria-hidden="true" aria-labelledby="ModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div style={{backgroundColor:"#24cb01"}} className="modal-header">
        <h2 className="modal-title" id="ModalToggleLabel2">You Are Booked!<i className="bi bi-check"></i></h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <p>
          
          <b>
        Your Booking has been confirmed.
        Check your email for details</b>
        </p>
        <i style={{fontSize:116}} className="bi bi-qr-code-scan"></i>
        <h4 className="mt-0">Booking ID: <i>{Date.now()}</i></h4>
        <p>Please arrive <b>at least 10 minutes before </b> your scheduled appointment</p>
        <br/>
        
        <div style={{backgroundColor:"#E0E0E0"}}>
        <hr/>
<h5><b>Need a Car while we are working on yours?</b></h5> <p><br/> Check the button below for some of the cheapest rentals in your city</p>
        <a className="btn btn-success" href="https://www.rentalcars.com/us/city/ca/ottawa/" rel="noreferrer" target="_blank">Car Rental in Ottawa</a>
        </div>
      </div>
      <div className="modal-footer">
        <a className="btn btn-secondary" data-bs-target="#ModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Go Back</a>
        <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
      </div>
    </div>
  </div>
</div>
 <a data-bs-dismiss="offcanvas" className="w-100 btn btn-primary btn-lg" data-bs-toggle="modal" href="#ModalToggle" type="submit" role="button">Confirm</a> 

</>
);
    }
};

    export default ConfirmModal;