import { Link } from "react-router-dom";
import React, { useState } from "react";
import Filter2 from '../Filter/Filter2';
import Data from "../Data/RecipeDB.json";
import {useTranslation} from "react-i18next";
import Pickmeal2 from "./pickaMeal2";
import Checkbox from "./Checkbox";




export default function Side({cuisine}) {
  //checked = e => {
    //const { name } = e.target;

  //   this.setState(prevState => {
  //     return {
  //       rating: {
  //         ...prevState.rating,
  //         [name]: !prevState.rating[name]
  //       }
  //     };
  //   });
  // };
  //}
    const {t} = useTranslation(["optionPage"]);
    const [state1, setState1] = useState(15);
   const checked = e => {
     setState1( e.target.value);
   }
  return (
    <div><div className="position-sticky " style={{top: "2rem"}}>
        <Filter2 cuisine1={cuisine.title}/>

<div className="mt-4 range border-success">
  <label htmlFor="customRange2" className="ps-2 form-label">Maxmimum Amount of Time You Would Like to Cook: {state1} mins</label>
  <input type="range" className="ps-2 form-range" min="15" max="120" id="customRange2" value={state1} onChange={checked}/>
      </div>
      <div className="ps-2">
        <h4 className="fst-italic py-5">{t("starRating")}</h4>
{/* <Checkbox
          id="1"
          title="show third category meals"
          name="1"
          //checked={this.state.rating[1]}
          //checked={this.//checked}
        />
        <Checkbox
          id="2"
          title="show second categor mealsy"
          name="2"
          //checked={this.//checked}
          //checked={this.state.rating[2]}
        />
                <Checkbox
          id="3"
          title="show third category meals"
          name="3"
          //checked={this.state.rating[3]}
          //checked={this.//checked}
        />
        <Checkbox
          id="4"
          title="show second categor mealsy"
          name="4"
          //checked={this.//checked}
          //checked={this.state.rating[4]}
        />
                <Checkbox
          id="5"
          title="show third category meals"
          name="5"
          //checked={this.state.rating[5]}
          //checked={this.//checked}
        /> */}
      
</div>

      </div>
      </div>
  )
}