import { Link } from "react-router-dom";
import React, { useState } from "react";
import Filter2 from '../Filter/Filter2';
// import Data from "../Data/RecipeDB.json";
import {useTranslation} from "react-i18next";
function stars(a) {
  let menuItems = [];
  for (let index = 0; index < a; index++) {
    menuItems.push(<i key={index} className="bi bi-star-fill" />);
  }
  return menuItems;
}
const Meal= ({title, cuisine})=> {

    const display1= cuisine.cuisine["display1"];
      const adjective=["There's something truly special about "," This simple recipes let the sweet, yet tart flavors of fresh flavours shine bright from a classic ","Amazing is an understatement to ", "Great ","Sweet ","Try the phenomenal ","Of all the things to try, you MUST try "].sort(()=> Math.random()-0.5)
          const closing=["Trust me when I say, it is an unexpected but deliciously addictive flavor. ","See the recipe immediately!", "What are you waiting for? Get Started!", "This recipe could be the talk of your friends and family!"].sort(()=> Math.random()-0.5)
  // console.log(title)
          return (

<div className="card mb-3" key={title.id}>
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
       <img src={display1} className="img-fluid rounded-start" alt="..."/> 
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title.name}</h5>
        <p className="card-text">{adjective[0]} {([title]).name}. {closing[0]}</p>
                <p className="card-text">Cooktime: <b>{title.cooktime} mins</b></p>
        <p className="card-text">{stars(title.rating)}</p>
        <Link to={`${title.name}`.split(" ").join("_")} className=" btn btn-outline-darkness">See Recipe for {title.name}!</Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default Meal;


