import Recommended from "./recommendation";
import Reviews from "./Reviews";

export default function Recipe() {
  return (
<section className="p-0">
  <div className="container">
    <section className="my-4 my-md-5">
      <div>
        <div className="order-sm-2 ml-auto">
  <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Bakery</a></li>
    <li className="breadcrumb-item"><a href="#">Muffins</a></li>
    <li className="breadcrumb-item active" aria-current="page">Oatmeal Muffins</li>
  </ol>
</nav>
          <h1 className="d-flex py-3 mb-3">
 <h1 className="display-4"><strong>Best Oatmeal Muffin</strong>
           </h1> 
            <a href="#0"><i className="bi bi-bookmark-heart pe-3 display-4"></i></a>
           <a href="#0"><i className="bi bi-download px-3 display-4"></i></a>
           <div className="display-10 ms-auto py-0 px-3">
           <i className="bi bi-star-fill"/>
              <i className="bi bi-star-fill"/>
              <i className="bi bi-star-fill"/>
              <i className="bi bi-star-fill"/>
              <i style={{color: '#f3da35'}} className="bi bi-star-half"></i>
              </div>
          <i className="bi bi-question-circle-fill"></i>
          
          </h1>
          
        </div>
      </div>
      <div className="blog-detail">
        <hr style={{height: '5px'}}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        <br/> 
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/assets/images/muffins/1.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Oatmeal Muffins Within 30 Minutes!</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/assets/images/muffins/2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/muffins/3.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
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
                <small>Prep Time</small>
                <span>15 min</span>
              </li>
              <li>
                <small>Prep Time</small>
                <span>15 min</span>
              </li>
              <li>
                <small>Servings</small>
                <span>4 People 
                  <a href="#0" className="ml-2">
                    <svg data-name="feather-icon/edit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <rect data-name="Bounding Box" width="16" height="16" fill="rgba(255,255,255,0)"></rect>
                      <path d="M2,14.747a2,2,0,0,1-2-2V3.414a2,2,0,0,1,2-2H6.667a.667.667,0,1,1,0,1.333H2a.667.667,0,0,0-.667.667v9.334A.667.667,0,0,0,2,13.414h9.334A.666.666,0,0,0,12,12.748V8.081a.667.667,0,1,1,1.333,0v4.667a2,2,0,0,1-2,2ZM4.141,10.49a.659.659,0,0,1-.121-.571l.667-2.666a.67.67,0,0,1,.176-.31L11.2.61A2.081,2.081,0,0,1,14.042.52l.1.09.09.1a2.084,2.084,0,0,1-.09,2.846L7.8,9.886a.669.669,0,0,1-.31.175l-2.666.667a.675.675,0,0,1-.165.02A.66.66,0,0,1,4.141,10.49Zm8-8.938-6.2,6.2L5.583,9.164l1.41-.352,6.2-6.2a.748.748,0,1,0-1.057-1.057Z" transform="translate(0.667 0.586)"></path>
                    </svg>
                  </a>
                </span>
              </li>
              <li>
                <a href="#0">
                  <svg data-name="feather-icon/printer" xmlns="http://www.w3.org/2000/svg" width="20" height="22.041" viewBox="0 0 20 22.041">
                    <rect data-name="Bounding Box" width="20" height="22.041" fill="rgba(255,255,255,0)"></rect>
                    <path d="M4.166,20.2a.88.88,0,0,1-.833-.918V16.531H2.5A2.636,2.636,0,0,1,0,13.776V9.184A2.636,2.636,0,0,1,2.5,6.429h.833V.918A.879.879,0,0,1,4.167,0h10A.878.878,0,0,1,15,.918v5.51h.833a2.636,2.636,0,0,1,2.5,2.755v4.592a2.636,2.636,0,0,1-2.5,2.755H15v2.755a.88.88,0,0,1-.834.918ZM5,18.367h8.333v-5.51H5v2.718c0,.012,0,.025,0,.038s0,.025,0,.037Zm10.834-3.673a.879.879,0,0,0,.833-.918V9.184a.878.878,0,0,0-.833-.918H2.5a.879.879,0,0,0-.833.918v4.592a.879.879,0,0,0,.833.918h.833V11.938a.88.88,0,0,1,.833-.918h10a.88.88,0,0,1,.834.918v2.756Zm-2.5-8.265V1.837H5V6.429Z" transform="translate(0.833 0.918)"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div id='ingredients'className="mt-4 mt-md-5 bg-secondary bg-opacity-25">
              <h3><strong>Ingredients</strong></h3>
              <div className="checklist pb-2">
                <strong>For the crust</strong>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="crackers" name="crackers" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough strikethrough" htmlFor="crackers">400g graham crackers</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="unsalted" name="unsalted" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="unsalted">150g unsalted butters, melted</label>
                </div>
              </div>
              <div className="checklist pb-4">
                <strong>For the cheescake</strong>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="marshmallows" name="marshmallows" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="marshmallows">300g marshmallows</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="melted" name="melted" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="melted">175g unsalted butter, melted</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="Philadelphia" name="Philadelphia" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="Philadelphia">500g Philadelphia cream cheese, softened</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="thickened" name="thickened" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="thickened">250ml thickened/whipping cream, warm</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="tbsppowdered" name="tbsppowdered" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="tbsppowdered">3 tbsp powdered gelatin + 3 tbsp water</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="dropspurple" name="dropspurple" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="dropspurple">5 drops purple food gel</label>
                </div>
                <div className="form-check form-check-rounded mx-5 recipe-checkbox">
                  <input type="checkbox" id="dropsblue" name="dropsblue" className="form-check-input rounded-circle"/>
                  <label className="form-check-label strikethrough" htmlFor="dropsblue">3 drops blue food gel</label>
                </div>
              </div>
            </div>
            <div className="row mt-4 g-0 bg-info">
              <div className="col-lg-8">
                <div className="rounded-12 bg-lightest-gray p-4">
                  <h6>Nutrition Facts</h6>
                  <ul className="Nutrition-list list-unstyled">
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
                  </ul>
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
                   <input type="checkbox" id="marshmallows" name="marshmallows" className="rounded-circle"/>
                  <span className="badge bg-warning rounded-pill mx-5">1</span>
                 To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">2</span>
                  Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">3</span>
                  Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">4</span>
                  Next, add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">5</span>
                  Add the cream cheese to the marshmallow mixture and use a hand mixer or stand mixer fitted with a paddle attachment to mix until smooth.
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">6</span>
                  Add the warm cream and melted gelatin mixture and mix until well combined.
                </li>
                <li className="d-flex align-items-start text-align-start">
                  <span className="badge bg-primary rounded-pill mx-5">7</span>
                  Add 1/3 of the mixture to a mixing bowl, add purple food gel and mix until well combined. Colour 1/3 of the mixture blue. Split the remaining mixture into two mixing bowls, colour one pink and leave the other white.
                </li>
                <li className="d-flex  text-align-start align-items-start">
                  <span className="badge bg-primary rounded-pill mx-5">8</span>
                  Pour half the purple cheesecake mixture into the chill tart crust. Add half the blue and then add the remaining purple and blue in the tart tin. Use a spoon to drizzle some pink cheesecake on top. Use a skewer or the end of a spoon to swirl the pink. Add some small dots of the plain cheesecake mixture to create stars and then sprinkle some more starts on top before chilling for 2 hours.
                </li>
                <li className="d-flex align-items-start">
                  <span className="badge bg-primary rounded-pill mx-5">9</span>
                  Slice with a knife to serve.
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
                        Subcribe Your Emails
                    </button>
                </div>
            </div>
        </div>
    </section>
      <Reviews/>
    </section>
        <Recommended/>
  </div>


<section id="reviews" className="bg-info pb-5">
        <div className="container-lg">
            <div className="text-center">
                
                <h2><i className="bi bi-stars"></i>Reviews</h2>
                <p className="lead">What my students have said about the book...</p>
            </div>


        </div>
    </section>


</section>
  )
  };