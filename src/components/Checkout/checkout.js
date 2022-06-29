// import {default as Booking} from '../Booking/booking'
// import {default as ConfirmModal} from '../Modal/confirmModal';
// import {default as Terms} from "./terms";
// import React, { Component } from 'react';
// import Data from './Car/carInfo.json';
// export default class Checkout extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       year1:'2022',
//       make1:'Audi',
//       size1:'Coupe',
//       model1:'R8',
//       firstName:'Joe',
//       lastName:'Smoe',
//       email: 'jsmoe123@uottawa.ca',
//       phoneNumber:'123-456-6789',
//       unqiueTags:[],
//       price:-7.00,
//       services:{
//         oilChange:false,
//         airFilter:false,
//         tirePurchase:false,
//         tireInstal:false,
//         brakes:false,
//         batteryInstall:false

//       }
      
//     };
//     this.onYearChange = this.onYearChange.bind(this);
//     this.onMakeChange = this.onMakeChange.bind(this);
//     this.onSizeChange = this.onSizeChange.bind(this);
//     this.onModelChange = this.onModelChange.bind(this);
//     this.onSubmitForm = this.onSubmitForm.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleCheckbox= this.handleCheckbox.bind(this);

//   }
  

//   handleCheckbox= event=> {
//     // let {price} = this.state;
//     // //console.log(input.target.value)
//     // // if (checked) {
//     //   price += input.target.value;
//     // //} 
//     // // else {
//     // //   price -= input.target.value;
//     // // }
//     var value1= parseFloat(event.target.value);
//     console.log(event.target.value);
//     let state = this.state;
//     // let {price}= this.state;
//     state.services[event.target.value]=event.target.checked;

//     if (event.target.checked){
//       state.price+=value1;
      
//     } else{
//       state.price-=value1;
//     }
//     console.log(event.target.checked)
// this.setState(state);
//     // this.setState({
//     //   price
//     // });
//   }
//   handleChange(event) {
//   const value = event.target.value;
//   this.setState({
//     ...this.state,
//     [event.target.name]: value
//   });

// }

//   onYearChange(event) {

//     this.setState({
//       year1: event.target.value,
//       model1:1,
//       make1:1,
//       size1:1,
//       unqiueTags:[]
//     });
//   }

//     onMakeChange(event) {

//     this.setState({
//       make1: event.target.value,
//             model1:1,
//       size1:1,
//       unqiueTags:[]
//     });


//   }

//     onSizeChange(event) {
//     this.setState({
      
//       size1: event.target.value,
//       model1:1,
//       unqiueTags:[]
//     });

//   }

//     onModelChange(event) {

//     this.setState({
//       model1: event.target.value
//     });
//   }


//   onSubmitForm() {
//      console.log(this.state)
//   }
  
//   render(){
//     return (
//       <>
//       <div className="container" data-bs-spy="scroll" data-bs-target="#navbar-2" data-bs-offset="0" tabIndex="0">
//             <div id="scrollspyHeading1" className="col-sm-12 col-lg-12 order-md-last">
//         <h4 className="d-flex justify-content-between align-items-center mb-3">
//           <span className="text-primary">Your cart</span>
//           <span className="badge bg-primary rounded-pill">4</span>
//         </h4>
//         <ul className="list-group mb-3">
//           <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div className="align-">
              
//               <h6><input onChange={this.handleCheckbox}  className="form-check-input me-1" type="checkbox" value="12" aria-label="..."/>Oil Change</h6>
//               <small className="text-muted">3.5L Synthetic</small>
//             </div>
//             <span className="text-muted">$12</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6><input onChange={this.handleCheckbox} className="form-check-input me-1" type="checkbox" value="14" aria-label="..."/>Air Filter</h6>
//               <small className="text-muted">AED 50</small>
//             </div>
//             <span className="text-muted">$14</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6 className="my-0"><input onChange={this.handleCheckbox}  className="form-check-input me-1" type="checkbox" value="145" aria-label="..."/>Tire Purchase</h6>
//               <small className="text-muted">Bridgestone</small>
//             </div>
//             <span className="text-muted">$145</span>
//           </li>
//                     <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6 className="my-0"><input onChange={this.handleCheckbox} className="form-check-input me-1" type="checkbox" value="65" aria-label="..."/>Tire Installation</h6>
//               <small className="text-muted" >All Tires</small>
//             </div>
//             <span className="text-muted">$65</span>
//           </li>
          
//                               <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6><input onChange={this.handleCheckbox}  className="form-check-input me-1" type="checkbox" value="32" aria-label="..."/>Brakes</h6>
//               <small className="text-muted">2023 Edition</small>
//             </div>
//             <span className="text-muted">$32</span>
//           </li>
//                               <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6><input onChange={this.handleCheckbox} className="form-check-input me-1" type="checkbox" value="12" aria-label="..."/>Battery Installation</h6>
//               <small className="text-muted">45 Watts</small>
//             </div>
//             <span className="text-muted">$12</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between bg-light">
//             <div className="text-success">
//               <h6 className="my-0">Promo code</h6>
//               <small>SUMMERDEALS</small>
//             </div>
//             <span className="text-success">−$7</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span>Total (CDN)</span>
//             <strong>${this.state.price}</strong>
//           </li>
//         </ul>

//         <form className="card p-2">
//           <div className="input-group">
//             <input type="text" className="form-control" placeholder="Promo code"/>
//             <button type="submit" className="btn btn-secondary">Redeem</button>
//           </div>
//         </form>
//       </div>
//       <hr/>


//       <div id="scrollspyHeading2" className="col-sm-12 col-lg-12 order-md-last">
//         <h4 className="d-flex justify-content-between align-items-center mb-3">
//           <span className="text-primary">Car Info</span>
//           <span className="badge bg-primary rounded-pill"><i className="bi bi-truck"></i></span>
//         </h4>
//         <div>
//         {/* <ConfirmModal 
//         year1={this.state.year1}  onYearChange={this.onYearChange.bind(this)} 
//         model1={this.state.model1}  onModelChange={this.onModelChange.bind(this)} 
//         size1={this.state.size1} onSizeChange={this.onSizeChange.bind(this)} 
//         make1={this.state.make1} onMakeChange={this.onMakeChange.bind(this)} /> */}
//         <select value={this.state.year1} name="Year" onChange={this.onYearChange} className="form-select my-3" aria-label="Default select " required>
//             {/* {Data[0][2005]} */}
            
//              {Object.keys(Data).map((opt,index)=>(
//               <option key={index} value={opt}>{opt}</option>
//             ))} 
            
//         </select>

//         <select value={this.state.make1} name="Make" onChange={this.onMakeChange} className="form-select my-3" aria-label="Default select " required>
//             <option>Select Make</option>
//              {Object.keys(Data[this.state.year1]).map((opt,index)=>(
//               <option key={index} value={opt}>{opt}</option>
//             ))} 
//         </select>

//         <select value={this.state.size1} name="Size" onChange={this.onSizeChange} className="form-select my-3" aria-label="Default select ">
//             <option>Select Size</option>

//             { Data[this.state.year1][this.state.make1] ? Object.keys(Data[this.state.year1][this.state.make1]).map((opt,index)=>(
//               <option key={index}value={opt}>{opt}</option>
//             )) : null }
            
//         </select>

//         <select value={this.state.model1} name="Model" onChange={this.onModelChange} className="form-select my-3" aria-label="Default select " required>
//             <option>Select Model</option> 
//             { Data[this.state.year1]?.[this.state.make1]?.[this.state.size1] ? (Data[this.state.year1][this.state.make1][this.state.size1]).map((opt,index)=>(
//               <option key={index} value={opt}>{opt}</option>
//             )) : null }

//         </select>
//       </div>
//       </div>
//       <hr/>
//       <div className="col-md-12 col-lg-12">
//         <h4 id="Book"className="mb-3">Booking</h4>
                 
//           <Booking/>

//            <hr className="my-4"/>
//         <h4 id="personalInfo"className="mb-3">Personal Info</h4>
//         <form autoComplete='on' onSubmit={this.onSubmit}>
//                 <div className="row g-3">
//             <div className="col-sm-6">
//               <label htmlFor="firstName" className="form-label" >First name</label>
//               <input type="text" className="form-control" id="firstName" placeholder="Joe" name='firstName' value= {this.state.firstName} onChange={(e) => {     this.handleChange(e); }} required/>
//             </div>

            

//             <div className="col-sm-6">
//               <label htmlFor="lastName" className="form-label">Last name</label>
//               <input type="text" className="form-control" id="lastName" placeholder="Smoe" name='lastName'value= {this.state.lastName} onChange={(e) => {     this.handleChange(e); }}required/>
//             </div>
//             <div className="col-12">
//               <label htmlFor="email" type="email" className="form-label">Email </label>
//               <div className="input-group has-validation">
//               <span className="input-group-text">
//                                 <i className="bi bi-envelope-fill"></i>
//                             </span>
//               <input type="email" className="form-control" id="email" placeholder="you@.com"name='email' defaultValue= {this.state.email} onChange={(e) => {     this.handleChange(e); }}required/>
//               </div>
//             </div>

//             <div className="col-12">
//                 <div>
//               <label htmlFor="number" className="form-label">Phone Number </label>
//               <div className="input-group has-validation">
//               <span className="input-group-text">
//                                 <i className="bi bi-telephone-fill"></i>
//                             </span>
//               <input type="tel" className="form-control" placeholder="(234)-567-8910" id="phoneNumber" name='phoneNumber' defaultValue= {this.state.phoneNumber} onChange={(e) => {     this.handleChange(e); }}required/>
//               </div>
//               </div>
//             </div>
//           </div>

//           <hr className="my-4"/>

//           <h4 id="terms" className="my-3">Terms And Conditions</h4>
//           <Terms/>

//           <hr className="my-4"/>
          


//                     <ConfirmModal 
//         year1={this.state.year1}  onYearChange={this.onYearChange.bind(this)} 
//         model1={this.state.model1}  onModelChange={this.onModelChange.bind(this)} 
//         size1={this.state.size1} onSizeChange={this.onSizeChange.bind(this)} 
//         make1={this.state.make1} onMakeChange={this.onMakeChange.bind(this)} 
//         lastName={this.state.lastName}
//         email={this.state.email}
//         phoneNumber={this.state.phoneNumber}
//         firstName={this.state.firstName} handleChange={this.handleChange.bind(this)}
//         price={this.state.price} handleCheckbox={this.handleCheckbox.bind(this)}/>
// {/* </button>  */}


//         </form>

//       </div>
//     </div>
// </>
// );
// };
// }

