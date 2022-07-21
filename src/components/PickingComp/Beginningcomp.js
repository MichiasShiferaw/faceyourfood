import { Link } from "react-router-dom";
import React, { useState } from "react";
import Filter2 from '../Filter/Filter2';
import Data from "../Data/RecipeDB.json";
import {useTranslation} from "react-i18next";
import Pickmeal2 from "./pickaMeal2";
import Side from "./Side";


  export default function Beginningcomp({cuisine}) {
    const {t} = useTranslation(["optionPage"]);
    // const option={Object.keys
    const adjective=["There's something truly special about "," This simple recipes let the sweet, yet tart flavors of fresh flavours shine bright from a classic ","Amazing is an understatement to ", "Great ","Sweet ","Try the phenomenal ","Of all the things to try, you MUST try "].sort(()=> Math.random()-0.5)
          const closing=["Trust me when I say, it is an unexpected but deliciously addictive flavor. ","See the recipe immediately!", "What are you waiting for? Get Started!", "This recipe could be the talk of your friends and family!"].sort(()=> Math.random()-0.5)

const [state1, setState1] = useState(15);
  const handleChange = e => {
    setState1( e.target.value);
  }
  const Options=[]
  Object.keys(Data).map((title) => {
    if((Data[title].category).toLowerCase()===(cuisine.title).toLowerCase()){
    return (
      Options.push(Data[title])
    );
  } else{
  return(null);
  }});

  // console({Options})
  // console.log("123")
  return (

<>

<div className="container">
<div className='pb-2'>
         <div className="mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-7 text-center text-md-start">
        <h1 className="display-5 fw-bold">{cuisine.title}</h1>
        <p className="lead my-4">{cuisine.description}</p>
        <a href="#selection"className="btn btn-outline-darkness btn-lg" type="button">{t("checkOut")}</a>
        </div><div className="col-md-4 text-center d-none d-md-block">
        <img className="img-fluid d-none d-md-block" src={cuisine.image} alt="" />
        </div>
      </div>
      </div>
    </div>
    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-stitch">{cuisine.option1} Specials</strong>

          <p className="card-text mb-auto">{adjective[0]} {cuisine.option1}. {closing[0]}</p>
          <Link to='Veggie_Pizza' className="text-decoration-none stretched-link text-stitch">{t("view")}</Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img width="200" height="250" src={cuisine.thumbnail}/>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-forgreen">{cuisine.option2} Favourites</strong>
          <p className="mb-auto">{adjective[1]} {cuisine.option2}. {closing[1]}.</p>
          <a href="#/" className="text-decoration-none stretched-link text-stitch">{t("view")}</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img width="200" height="250" src={cuisine.thumbnail}/>

        </div>
      </div>
    </div>
  </div>
    </div>

        <Pickmeal2 option={Options} cuisine={cuisine }/>

</div>

</>

  )};