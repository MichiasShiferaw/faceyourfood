import { Link } from "react-router-dom";
import React, { useState } from "react";
import Filter2 from '../Filter/Filter2';
import Data from "../Data/RecipeDB.json";
import {useTranslation} from "react-i18next";

// export default function PickMeal({title1}) {
  export default function PickMeal({desc,title1}) {
    const {t} = useTranslation(["optionPage"]);
    // {Object.key(Data).map((muffin)=>(
    //   console.log(muffin)
    // ))}
const [state1, setState1] = useState(15);
  const handleChange = e => {
    setState1( e.target.value);
  }

  const muffinRecipes = [
        {
            title: "Mixed Berries Muffin",
            //image: "/img/gallery/img_1.png",
            thumbnail: "/assets/images/muffins/1.png",
        },
        {
            title: "Carrot Muffin",
            //image: "/img/gallery/img_5.png",
            thumbnail: "/assets/images/muffins/2.png",
        },
        {
            title: "Rasisn Muffin",
            //image: "/img/gallery/img_6.png",
            thumbnail: "/assets/images/muffins/3.png",
        },
        {
            title: "Blueberry Muffin",
            //image: "/img/gallery/img_4.png",
            thumbnail: "/assets/images/muffins/1.png",
        },
        {
            title: "Triple Mix Muffin",
            //image: "/img/gallery/img_10.png",
            thumbnail: "/assets/images/muffins/4.png",
        },
        {
            title: "Chocolate Chip",
            //image: "/img/gallery/img_1.png",
            thumbnail: "/assets/images/muffins/5.png",
        }, ]



  return (

<>

<div className="container">
<div className='pb-2'>
         <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <div className="d-sm-flex align-items-center justify-content-between">
            <div>
        <h1 className="display-5 fw-bold">{title1}</h1>
        <p className="lead my-4">{desc}</p>
        <button className="btn btn-primary btn-lg" type="button">Check Out<br/>Selections</button>
        </div><div>
        <img className="img-fluid w-100 d-none d-sm-block" src="assets/images/me.png" alt="" />
        </div>
      </div>
      </div>
    </div>
    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{title1} Specials</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">{title1} Favourites</strong>
          <h3 className="mb-0">Post title</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
  </div>
    </div>


   <div className="row g-5">
    <div className="col-md-2 flex-wrap">
      <div className="position-sticky " style={{top: "2rem"}}>
        <div className="p-4 mb-3 bg-light rounded ">
          <h4 className="fst-italic">Categories</h4>
          <p className="mb-0">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <Filter2/>

<div className="ps-2 mt-4 range border-success">
  <label htmlFor="customRange2" className="ps-2 form-label">Maxmimum Amount of Time</label>
  <input type="range" className="ps-2 form-range" min="15" max="120" id="customRange2" value={state1} onChange={handleChange}/>
       <h6 className="ps-2">Max time : {state1} mins</h6>
      </div>

      <div className="ps-2">
        <h4>{t("starRating")}</h4>
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
        <div className="p-4">
          <h4 className="fst-italic">Another Form</h4>
        </div>
{/* 
        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href="#/">GitHub</a></li>
            <li><a href="#/">Twitter</a></li>
            <li><a href="#/">Facebook</a></li>
          </ol>
        </div> */}
      </div>
    </div>
    <div className="col-md-10">
           <div className="sort-filter d-flex justify-content-end me-2">
            <div >
              <label htmlFor="sort" className="control-label me-2"><strong><i className="bi bi-filter"></i>{t("sortBy")}:</strong></label>
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
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
      <img src="/assets/images/muffins/4.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title1}</h5>
        <p className="card-text">The <strong>Best</strong> Homemade Muffin In The World. Must Try!</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <Link to='/bakery/oatmealmuffin' className="btn btn-primary stretched-link">View the Recipe</Link>
      </div>
    </div>
  </div>
</div>
{Object.keys(Data).map((muffin,index)=>(
  // Data[{muffin}].
  // {
  //   (Data[muffin]).map((sub,subindex)=>(

        <div className="card mb-3" key={index}>
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
      <img src="/assets/images/muffins/3.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{(Data[muffin]).name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <Link to={`${(Data[muffin]).name}`.split(" ").join("_")} className="btn btn-outline-primary">{t("seeRecipe")} {(Data[muffin]).name}!</Link>
      </div>
    </div>
  </div>
</div>
  //   ))
  // }
)) }
</div>

    
  </div>
</div>
</div>
</>

  )};