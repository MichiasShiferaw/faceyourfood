import {categoriesPreview} from "../Data/Data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Pop1() {
const { t } = useTranslation(["common"]);
  return (
  <section className="pt-2 pb-5">
  <div className="container">
    <div className="row popularcatosect">
      <div className="col-6 d-flex">
        <h3 className="mb-2 me-4 text-white">{t("popularcategories")} </h3>
        <Link to='/categories'>
          <button className="btn bg-grite">{t("viewAll")}</button>
        </Link>
      </div>
      <div className="col-6 text-end">
        <a className="btn bg-grite mb-2 mr-1" data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="prev" title="previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
        </a>
        <button className="btn bg-grite mb-2 " data-bs-target="#carouselExampleIndicators2" data-bs-slide="next" role="button" title="next">
<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
        </button>
      </div>
      <div className="col-12">
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                
          {categoriesPreview.slice(0,6).map((recipe, index)=>(
                <div  key={index} className="col-lg-2 col-md-4 col-4">
                    <figure className="my-3 text-center">
                     <Link to={`/categories/${(recipe.title).toLowerCase()}`} className="animation rounded-circle text-decoration-none">
            {/* <a href=`/catgories/${recipe.title}` className="animation rounded-circle"> */}
              <img src={recipe.thumbnail} className="rounded-circle img-fluid" alt="Menu"/>
            {/* </a> */}

            <figcaption className="mt-2">
              <span className="category-title text-grite"><strong>{recipe.title}</strong></span>
            </figcaption>
            </Link>
          </figure> 
        </div>))}
                
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
{categoriesPreview.slice(6,12).map((recipe,index)=>(
                <div key={index+6} className="col-lg-2 col-md-4 col-4">
                  
                    <figure  className="my-3 text-center">
            <Link to={`/categories/${(recipe.title).toLowerCase()}`} className="animation rounded-circle">
              <img src={recipe.thumbnail} className="rounded-circle img-fluid" alt="Menu"/>
            </Link>
            <figcaption className="mt-2">
              <a href="#/" className="category-title">{recipe.title}</a>
            </figcaption>
          </figure>           
        </div>))}
                
              </div>
            </div>
                        <div className="carousel-item">
              <div className="row">
                {categoriesPreview.slice(13,19).map((recipe, index)=>(
                <div key={index+13} className="col-lg-2 col-md-4 col-4">
                  
                    <figure className="my-3 text-center">
            <Link to={`/categories/${(recipe.title).toLowerCase()}`} className="animation rounded-circle">
              <img src={recipe.thumbnail} className="rounded-circle img-fluid" alt="Menu"/>
            </Link>
            <figcaption className="mt-2">
              <a href="#/" className="category-title">{recipe.title}</a>
            </figcaption>
          </figure>           
        </div>    ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)};