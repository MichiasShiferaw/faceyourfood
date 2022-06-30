import Recommended from "./recommendation";
import Reviews from "./Reviews";
import {Link} from "react-router-dom";

export default function Recipe() {
  return (
<section className="recipespage p-0">
  <div className="container">
    <section className="my-4 my-md-5">
      <div>
        <div className="order-sm-2 ml-auto">
  <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <Link to='/categories' className="breadcrumb-item">Categories</Link>
    <li className="breadcrumb-item"><a href="#/">Bakery</a></li>
    <li className="breadcrumb-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#/">Muffins</a></li>
    <li className="breadcrumb-item active" aria-current="page">Oatmeal Muffins</li>
  </ol>
</nav>
          <div className="d-flex py-3 mb-3">
 <h1 className="display-4"><strong>Best Oatmeal Muffin</strong>
           </h1> 
            <a href="#0"><i className="bi bi-bookmark-heart pe-3 display-4"></i></a>
           <a href="#0"><i className="bi bi-download px-3 display-4"></i></a>
           <div className="display-6 ms-auto py-0 px-3">
           <i className="bi bi-star-fill"/>
              <i className="bi bi-star-fill"/>
              <i className="bi bi-star-fill"/>
              <i className="bi bi-star-fill"/>
              <i style={{color: '#f3da35'}} className="bi bi-star-half"></i>
              <i className="bi bi-question-circle-fill"></i>
              </div>
          
          
          </div>
          
        </div>
      </div>
      <div className="blog-detail pb-0 mb-0">
        <hr style={{height: '5px'}}/>
        <p className="pb-0 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        <br/> 
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/assets/images/muffins/1.png" className="d-block w-175 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Oatmeal Muffins Within 30 Minutes!</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/assets/images/muffins/2.png" className="d-block w-175 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/muffins/3.png" className="d-block w-175 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <br/>
        <div className="row mt-0 mt-md-5">
          <div className="col-md-12">
            <ul className="list-unstyled component-list fyf-svg display-flex">
              <li>
                <small>Prep Time: </small>
                <span><strong>15 min</strong></span>
              </li>
              <li>
                <small>Cooking Time: </small>
                <span><strong>15 min</strong></span>
              </li>
              <li>
                <small>Servings: </small>
                <span title="Serving of An Average Adult"><strong>4 People  
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </strong></span>
              </li>
              <li>
                <a href="#0" title="Print Page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                      <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                      <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div id='ingredients'className="mt-4 mt-md-5 bg-secondary bg-opacity-25">
              <h3 className="ps-2"><strong>Ingredients</strong></h3>
              <div className="checklist pb-2">
                <strong className="ps-4">For the crust</strong>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="crackers" name="crackers" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough strikethrough" htmlFor="crackers">1/4 cup (50g) Obtuse</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="unsalted" name="unsalted" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="unsalted">150g eggs, Rubber goose</label>
                </div>
              </div>
              <div className="checklist pb-4">
                <strong className="ps-4">For the middle</strong>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="marshmallows" name="marshmallows" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="marshmallows">1/2 cup (100g) Green Moose</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="melted" name="melted" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="melted">175g vinegar, Guava Juice</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="Philadelphia" name="Philadelphia" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="Philadelphia">1/2 cup (115g) Giant Snake</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="thickened" name="thickened" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="thickened">250ml Birthday Cake</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="tbsppowdered" name="tbsppowdered" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="tbsppowdered">3 tbsp Large Fries</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="dropspurple" name="dropspurple" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="dropspurple">1/4 cup (50g) Chocolate Shake</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="dropsblue" name="dropsblue" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="dropsblue">1/4 cup (50g) packed light or dark brown</label>
                </div>
              </div>
            </div>
            <div className="row mt-4 g-0 bg-info">
              <div className="col-lg-8">
                <div className="rounded-12 bg-lightest-gray p-4">
                  <h6>Nutrition Facts</h6>
                  <div className="table-responsive"> 
                  <table class="table nutrition-list" >
  <thead>
    <tr>
      <th scope="col">Fact</th>
      <th scope="col">Value</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Calories</th>
      <td>219.9</td>

    </tr>
    <tr>
      <th scope="row">Total Fat</th>
      <td>12.2g</td>

    </tr>
    <tr>
      <th scope="row">Saturated Fat</th>
      <td>3.2g</td>
    </tr>
        <tr>
      <th scope="row">Cholesterol</th>
      <td>234lbs</td>
    </tr>
        <tr>
      <th scope="row">Sodium</th>
      <td>4.3g</td>
    </tr>
        <tr>
      <th scope="row">Potassium</th>
      <td>7.9g</td>
    </tr>
            <tr>
      <th scope="row">Sugars</th>
      <td>10.2g</td>
    </tr>
            <tr>
      <th scope="row">Protein</th>
      <td>8.4g</td>
    </tr>
  </tbody>
</table>
</div>
                  {/* <ul className="Nutrition-list list-unstyled">
                    <li>
                      <span>Calories</span>
                      <span>219.9</span>
                    </li>
                    <li>
                      <span>Total Fat</span>
                      <span>10.7 g</span>
                    </li>
                    <li>
                      <span>Saturated Fat</span>
                      <span>2.2 g</span>
                    </li>
                    <li>
                      <span>Cholesterol</span>
                      <span>37.4 mg</span>
                    </li>
                    <li>
                      <span>Sodium</span>
                      <span>120.3 mg</span>
                    </li>
                    <li>
                      <span>Potassium</span>
                      <span>32.8 mg</span>
                    </li>
                    <li>
                      <span>Total Carbohydrate</span>
                      <span>22.3 g</span>
                    </li>
                    <li>
                      <span>Sugars</span>
                      <span>8.4 g</span>
                    </li>
                    <li>
                      <span>Protein</span>
                      <span>7.9 g</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-5">
              <h3>Instructions <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
</svg></h3>
              <ul id='instructions' className="instruction-list list-unstyled ps-0 mt-5">
                <li className="d-flex align-items-start text-align-start">
        
                  <span className="badge bg-warning rounded-pill mx-5">1</span>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">2</span>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">3</span>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">4</span>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">5</span>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">6</span>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">7</span>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex  text-align-start align-items-start">
                  <span className="badge bg-primary rounded-pill mx-5">8</span>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
                <li className="d-flex align-items-start">
                  <span className="badge bg-primary rounded-pill mx-5">9</span>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 my-md-5 py-1 py-md-5">
        <h2 className="mb-3">Already made this?</h2>
        <a href="#0" className="btn btn-outline-dark px-5">Share your feedback</a>
        <br/>
        <br/>
        <hr className="lh-lg"/>
      </div>

          <section className="bg-light">
        <div className="container">
            <div className="text-center">
                <h2>Stay in the Loop</h2>
                <p className="lead">Get the latest updates as they happen...</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <p className="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque hic assumenda ipsam? Sapiente, facilis facere odio provident magnam voluptatem quia dolores commodi ut eveniet animi deserunt, nisi laborum totam.</p>
                    <button className="btn btn-primary"data-bs-toggle="modal" data-bs-target="#reg-modal">
                        Subscribe Your Emails
                    </button>
                </div>
            </div>
        </div>
    </section>
      <Reviews/>
    </section>
        <Recommended/>
  </div>




</section>
  )
  };