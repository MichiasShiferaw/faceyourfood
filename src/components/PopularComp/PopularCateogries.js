import {categoriesPreview} from "../Data/Data";
import { Link } from "react-router-dom";

export default function Pop1() {
  var index1=0;
  return (
  <section className="pt-2 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="mb-2">Popular Categories </h3>
      </div>
      <div className="col-6 text-end">
        <a className="btn btn-outline-primary mb-2 mr-1" data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
          <i className="bi bi-arrow-left"></i>
        </a>
        <button className="btn btn-outline-primary mb-2 " data-bs-target="#carouselExampleIndicators2" data-bs-slide="next" role="button">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      <div className="col-12">
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                
          {categoriesPreview.slice(0,6).map((recipe, index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                    <figure key={index} className="my-3 text-center">
                     <Link to={`/categories/${(recipe.title).toLowerCase()}`} className="animation rounded-circle">
            {/* <a href=`/catgories/${recipe.title}` className="animation rounded-circle"> */}
              <img src={recipe.thumbnail} className="rounded-circle img-fluid" alt="Menu"/>
            {/* </a> */}
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
{categoriesPreview.slice(7,13).map((recipe,index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                  
                    <figure key={index} className="my-3 text-center">
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
                {categoriesPreview.slice(14,20).map((recipe, index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                  
                    <figure key={index} className="my-3 text-center">
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