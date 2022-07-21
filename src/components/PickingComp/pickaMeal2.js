import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Meallist from "./Meallist";
import Data from "../Data/RecipeDB.json";
import Filter2 from "../Filter/Filter2";
import { useState } from "react";
// import Range from "./Range";


function Range({options1}){
//  console.log("Hello")
 const [state1, setState1] = useState(120);
//  const [value, setValue] = useState(120);
  const [hotelList, filterList] = useState(options1);
   const checked = (e,newValue) => {
     setState1( e.target.value);
    
     let limit=state1;
     newValue=state1;

         switch (Math.round(newValue)) {
      case 15: {
        limit = 15;

        break;
      }
      case 30: {
        limit = 30;

        break;
      }
            case 45: {
        limit = 45;

        break;
      }
            case 60: {
        limit = 60;
        break;
      }
            case 75: {
        limit = 75;

        break;
      }
      case 90: {
        limit = 90;
        break;
      }
            case 105: {
        limit = 105;

        break;
      }
            case 120: {
        limit = 120;
        break;
      }
      default: {
        limit = 0;
      }
    }
    const newList = (options1).filter(item=>(item.cooktime)<=limit);
    filterList(newList);
    hotelList.sort((a,b)=>a.cooktime-b.cooktime)


   }
  //  console.log(hotelList.id)
  //  console.log('JLO')
  return (
    <>
  <label htmlFor="customRange2" className="ps-2 form-label">Maxmimum Amount of Time You Would Like to Cook: <em className="text-decoration-underline">&lt;{state1} mins</em></label>
  <input type="range" className="ps-2 form-range " min="0" max="120" step="15"  id="customRange2" value={state1} onChange={checked} list="steplist"/>
        <select className="bg-light border-0 ms-1 me-2 mt-1">
  {hotelList.map((item, index) => (
          // <li key={index}>
            <option value={item.name} key={index}>{item.name}</option>
            
          // </li>
        ))}
        </select>
        <small className="ms-3">Updates dynamically!</small>
      </>
  )
}

export default class Pickmeal2 extends Component {
  constructor(props){
    super(props)
    //  let stepsource= this.props;
  }

  
  state = {
    value:15,
    maxValue:120,
    meals:  this.props["option"]
    ,
    rating: {
      3: false,
      2: false,
      1: false,
      4: false,
      5:false,
    }
  };

  handleChange = e => {
    const { name } = e.target;

    this.setState(prevState => {
      return {
        rating: {
          ...prevState.rating,
          [name]: !prevState.rating[name]
        }
      };
    });
  };

  render() {
    //  console.log(this.props);
    //  console.log("Dark")
     const checkedProducts = Object.entries(this.state.rating)
       .filter(category => category[1])
       .map(category => category[0]);
      const filteredProducts = this.state.meals.filter(( category1 ) =>
     
        (checkedProducts).includes((category1.rating).toString())
      
      );


    return (
      <>
 <div className="row g-5">
    <div className="col-md-3 flex-wrap">
      <div className="position-sticky " style={{top: "2rem"}}>
        <Filter2 mealOpt={this.state.meals}/>

<div className="mt-4 range border-success">
  <Range options1={this.state.meals}/>
      </div>

      <div className="ps-2">
        <h4 className="fst-italic py-5">starRating</h4>
          <div className="row">
        <div className="btn-group justify-content-center flex-wrap" role="group" aria-label="Basic checkbox toggle button group">

        <Checkbox
          id="1"
          title="show third category meals"
          name="1"
          checked={this.state.rating[1]}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="2"
          title="show second categor mealsy"
          name="2"
          handleChange={this.handleChange}
          checked={this.state.rating[2]}
        />
                <Checkbox
          id="3"
          title="show third category meals"
          name="3"
          checked={this.state.rating[3]}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="4"
          title="show second categor mealsy"
          name="4"
          handleChange={this.handleChange}
          checked={this.state.rating[4]}
        />
                <Checkbox
          id="5"
          title="show third category meals"
          name="5"
          checked={this.state.rating[5]}
          handleChange={this.handleChange}
        />
      </div>
      </div>
      </div>
      </div>
      </div>
<div id="selection" className="col-md-9">
           <div className="sort-filter d-flex justify-content-end me-2">
            <div >
              <label htmlFor="sort"  className="control-label me-2"><strong><i className="bi bi-filter"></i>Sort By:</strong></label>
            <select className=" form-select someInput me-2 mb-2" id="sort" disabled>
              <option></option>
              <option >recommended</option>
              <option>quickestTime</option>
              <option>highestRating</option>
              <option>lowestRating</option>
              <option>easy</option>
            </select>
          </div>
        </div> 


    <div className="vstack gap-3">


         <Meallist
         cuisine={this.props}
          meals={
             filteredProducts.length === 0
              ? this.state.meals: 
              filteredProducts
          }
        /> 
      </div>
          </div>
          </div>
      </>
    );
  }
}


