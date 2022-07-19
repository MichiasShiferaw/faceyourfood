import { Link } from "react-router-dom";
import React, { useState } from "react";
import Filter2 from '../Filter/Filter2';
import Data from "../Data/RecipeDB.json";
import {useTranslation} from "react-i18next";


  export default function PickMeal({cuisine}) {
    const {t} = useTranslation(["optionPage"]);
    const adjective=["There's something truly special about "," This simple recipes let the sweet, yet tart flavors of fresh flavours shine bright from a classic ","Amazing is an understatement to ", "Great ","Sweet ","Try the phenomenal ","Of all the things to try, you MUST try "].sort(()=> Math.random()-0.5)
          const closing=["Trust me when I say, it is an unexpected but deliciously addictive flavor. ","See the recipe immediately!", "What are you waiting for? Get Started!", "This recipe could be the talk of your friends and family!"].sort(()=> Math.random()-0.5)

const [state1, setState1] = useState(15);
  const handleChange = e => {
    setState1( e.target.value);
  }

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


   <div className="row g-5">
    <div className="col-md-3 flex-wrap">
      <div className="position-sticky " style={{top: "2rem"}}>
        <Filter2 cuisine1={cuisine.title}/>

<div className="mt-4 range border-success">
  <label htmlFor="customRange2" className="ps-2 form-label">Maxmimum Amount of Time You Would Like to Cook: {state1} mins</label>
  <input type="range" className="ps-2 form-range" min="15" max="120" id="customRange2" value={state1} onChange={handleChange}/>
      </div>

      <div className="ps-2">
        <h4 className="fst-italic py-5">{t("starRating")}</h4>
          <div className="row">
        <div className="btn-group flex-wrap" role="group" aria-label="Basic checkbox toggle button group">

  <input type="checkbox" className="col btn-check" id="btncheck1" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btncheck1">{t("1star")}<i className="bi bi-star-fill"/></label>

  <input type="checkbox" className="col btn-check" id="btncheck2" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btncheck2">{t("2stars")}<i className="bi bi-star-fill"/></label>

  <input type="checkbox" className="col btn-check" id="btncheck3" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btncheck3">{t("3stars")}<i className="bi bi-star-fill"/></label>
    <input type="checkbox" className="col btn-check" id="btncheck4" autoComplete="off"/>
  <label className="btn btn-outline-primary" htmlFor="btncheck4">{t("4stars")}<i className="bi bi-star-fill"/></label>

  <input type="checkbox" className="col btn-check" id="btncheck5" autoComplete="off"/>
  <label className="btn btn-outline-success" htmlFor="btncheck5">{t("5stars")}<i className="bi bi-star-fill"/></label>
</div>
</div>

      </div>
      </div>
    </div>
    <div id="selection" className="col-md-9">
           <div className="sort-filter d-flex justify-content-end me-2">
            <div >
              <label htmlFor="sort"  className="control-label me-2"><strong><i className="bi bi-filter"></i>{t("sortBy")}:</strong></label>
            <select className=" form-select someInput me-2 mb-2" id="sort">
              <option></option>
              <option>{t("recommended")}</option>
              <option>{t("quickestTime")}</option>
              <option>{t("highestRating")}</option>
              <option>{t("lowestRating")}</option>
              <option>{t("easy")}</option>
            </select>
          </div>
        </div> 


    <div className="vstack gap-3">

{Object.keys(Data).map((muffin,index)=>{
  // console.log(Data[muffin].category);
  if((Data[muffin].category).toLowerCase()===(cuisine.title).toLowerCase()){
//  console.log(`${(Data[muffin]).name}`);
return(

        <div className="card mb-3" key={index}>
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
      <img src={cuisine.display1} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{(Data[muffin]).name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Yum</small></p>
        <Link to={`${(Data[muffin]).name}`.split(" ").join("_")} className="btn btn-outline-darkness">{t("seeRecipe")} {(Data[muffin]).name}!</Link>
      </div>
    </div>
  </div>
</div>)

 } else{
  return(null);
 }}) }
</div>

    
  </div>
</div>
</div>
</>

  )};