import { Link } from "react-router-dom";
import { trendingNow } from "../Data/TrendingNow";
import Toggle from "../RecipeComp/Togglelike";
import {useTranslation} from "react-i18next";

export default function Portion() {
  const {t} = useTranslation(["homePage"]);
  // console.log(trendingNow[choice()]);
  var num = Array.from({length: 6}, () =>(Math.floor(Math.random()*trendingNow.length)));
  // console.log(randomArr);
  // let num= choice();
  return (
    <>
      <div className="mt-5 seasonalsection">
        <div className="pt-3 d-flex align-items-center">
          <hr />
          <h1 className="seasonalheader">
            <i className="bi bi-sun"></i> {t("seasonalFavourites")} 
          </h1>
          <hr className="flex-grow-1" />
        </div>

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {trendingNow.slice(0,9).map((recipe,index)=>
  
  
 
        <div className="col" key={index}>
          <div className="card shadow-sm">
            {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <img src="assets/images/categories/IceCream.jpg" className="card-img-top img-fluid" width="100%" height="225" />
            <div className="card-body">
                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            <div className="imgoverlay">
                              <div className="image__title">Bricks</div>
                              <p className="image__description">Here we have a brick wall</p>
                            </div>
              <div className="fs-3 d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="fs-5 btn btn-sm btn-outline-secondary">{t("view")}</button>
                </div>
                <Toggle icon={"bi bi-heart"}/>
              </div>
            </div>
          </div>
        </div>
        )}
        </div>






        <hr />
      </div>
    </>
  );
}
