
import {Link } from 'react-router-dom'
export default function Launch (){

    return(

<section className="p-0 mb-4 mb-md-5">
            <div className="pt-3 d-flex align-items-center">
    <hr/>
    <h3 className="">Trending This Week</h3>
    <hr className="flex-grow-1" />
</div>
      <div className="row">
        <div className="col-md-4">
            <div className="card bg-light">
          <figure className="my-1 card">
            <a href="#0" className="animation rounded-top-6">
              <img src="assets/images/muffins/1.png" className="w-100" alt="Menu"/>
            </a>
            <figcaption className="mt-2 px-3 px-lg-4">
              <div className="w-100 float-left">
                <div className="float-left">
                  <div className="fabrx-ratings has-rating rating">
              <i className="bi bi-star-fill"/>
                            <i className="bi bi-star-fill"/>
                                          <i className="bi bi-star-fill"/>
                                                        <i className="bi bi-star-fill"/>
                                                                      <i className="bi bi-star-fill"/>
                  </div>
                </div>
              </div>
              <h5 className="card-title font-weight-semibold inter-font f-size-25 mt-2 mb-1"><a href="#0" className="text-black d-block mt-1">Oatmeal Muffin</a></h5>
            </figcaption>
          </figure>
          <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

<div className="container p-0 ">          <div className="row row-cols-auto">
            <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">30 mins</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Carb-free</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Vegan</div>
    {/* <div className="bg-darkturq rounded-pill m-1 p-2 d-inline-block search-item">Tag4</div> */}

          </div>
</div>
    
    

  </div>
  <div className="card-footer">
<Link to="/bakery/oatmealmuffin" href="#/" className="btn btn-outline-beige1 stretched-link">View <i className="bi bi-caret-right-fill"></i></Link>
  </div>
        </div>
        </div>


<div className="col-md-4">
            <div className="card bg-light">
          <figure className="my-1 card">
            <a href="#0" className="animation rounded-top-6">
              <img src="assets/images/muffins/1.png" className="w-100" alt="Menu"/>
            </a>
            <figcaption className="mt-2 px-3 px-lg-4">
              <div className="w-100 float-left">
                <div className="float-left">
                  <div className="fabrx-ratings has-rating rating">
              <i className="bi bi-star-fill"/>
                            <i className="bi bi-star-fill"/>
                                          <i className="bi bi-star-fill"/>
                                                        <i className="bi bi-star-fill"/>
                  </div>
                </div>
              </div>
              <h5 className="card-title font-weight-semibold inter-font f-size-25 mt-2 mb-1"><a href="#0" className="text-black d-block mt-1">Blueberry Muffin</a></h5>
            </figcaption>
          </figure>
          <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

<div className="container p-0 ">          <div className="row row-cols-auto">
            <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">30 mins</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Carb-free</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Egg-free</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Tag: 4</div>


          </div>
</div>
    

  </div>
    <div className="card-footer">
<a href="#/" className="btn btn-outline-primary stretched-link disabled">Go <i className="bi bi-caret-right-fill"></i></a>
  </div>
        </div>
        </div>



<div className="col-md-4">
            <div className="card bg-light">
          <figure className="my-1 card">
            <a href="#0" className="animation rounded-top-6">
              <img src="assets/images/muffins/3.png" className="w-100" alt="Menu"/>
            </a>
            <figcaption className="mt-2 px-3 px-lg-4">
              <div className="w-100 float-left">
                <div className="float-left">
                  <div className="fabrx-ratings has-rating rating">
              <i className="bi bi-star-fill"/>
                            <i className="bi bi-star-fill"/>
                                          <i className="bi bi-star-fill"/>
                                                        <i className="bi bi-star-fill"/>
                                                                      <i className="bi bi-star-fill"/>
                  </div>
                </div>
              </div>
              <h5 className="card-title font-weight-semibold inter-font f-size-25 mt-2 mb-1"><a href="#0" className="text-black d-block mt-1">Blueberry Muffin</a></h5>
            </figcaption>
          </figure>
          <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

<div className="container p-0 ">          <div className="row row-cols-auto">
            <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">30 mins</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Carb-free</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Egg-free</div>
    <div className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">Tag4</div>


          </div>
</div>
    

  </div>
    <div className="card-footer">
<a href="#/" className="btn btn-outline-primary stretched-link disabled">Go <i className="bi bi-caret-right-fill"></i></a>
  </div>
        </div>
        </div>
      </div>


       <hr className="mt-5" style={{height: '5px'}}/>
    </section>
    )
};
