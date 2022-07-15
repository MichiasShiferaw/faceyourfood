import { Link } from "react-router-dom";
import { trendingNow } from "../Data/TrendingNow";
import Toggle from "../RecipeComp/Togglelike";


export default function Portion() {
  // console.log(trendingNow[choice()]);
  var num = Array.from({length: 6}, () =>(Math.floor(Math.random()*trendingNow.length)));
  // console.log(randomArr);
  // let num= choice();
  return (
    <>
      <div className="seasonalsection">
        <div className="pt-3 d-flex align-items-center">
          <hr />
          <h3 className="seasonalheader">
            <i className="bi bi-sun"></i> Seasonal Favourites 
          </h3>
          <hr className="flex-grow-1" />
        </div>

        <div className="row align-items-md-stretch">
          <div className="card-group">
              <div className="col-md-3">
              <div className="card h-100">
                <img
                  src="assets/images/muffins/1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{trendingNow[num[0]].name}</h5>
                  <p className="card-text">
                    Descriptions of the {trendingNow[num[0]].name} : Lorem ipsum dolor sit amet,
                  </p>
                </div>
                                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to="/categories/bakery/oatmealmuffin"
                    href="#/"
                    className=" fs-4 btn btn-outline-beige1"
                  >
                    View <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle icon={"bi bi-bookmark"}/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0">
                  <div className="col-md-8">
                    <img
                      src="assets/images/categories/IceCream.jpg"
                      height="auto"
                      className="img-fluid float-start" 
                      alt="..."
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">{trendingNow[num[1]].name}</h5>
                      <p className="card-text">
                        Descriptions of the {trendingNow[num[1]].name} : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      </p>
                      <div className="container p-0 row row-cols-auto">
                        {trendingNow[num[1]].tags.map((tags, index)=>(
                          <div key={index} className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">
                          {tags.charAt(0).toUpperCase() + tags.slice(1)}
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to="/categories/bakery/oatmealmuffin"
                    href="#/"
                    className=" fs-4 btn btn-outline-beige1"
                  >
                    View <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle icon={"bi bi-bookmark"}/>
                </div>
              </div>
            </div> 
                {/* <div className="col-md-6">
                  <div className="card h-100">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">{trendingNow[num[1]].name}</strong>
          <h3 className="mb-0">Post title</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img className="card-img-top" width="200" height="250" role="img"src="assets/images/categories/IceCream.jpg" aria-label="Placeholder: Thumbnail"></img>
        </div>
      </div>
    </div>
    </div> */}
    

            <div className="col-md-3">
              <div className="card h-100">
                <img
                  src="assets/images/categories/Sandwiches.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Meal Name</h5>
                  <p className="card-text">
Descriptions of the {trendingNow[num[2]].name} : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
                                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to="/categories/bakery/oatmealmuffin"
                    href="#/"
                    className=" fs-4 btn btn-outline-beige1"
                  >
                    View <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle icon={"bi bi-bookmark"}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-2 pb-5">
                    <div className="card-group">
              <div className="col-md-3">
              <div className="card h-100">
                <img
                  src="assets/images/muffins/1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{trendingNow[num[3]].name}</h5>
                  <p className="card-text">
                    Descriptions of the {trendingNow[num[3]].name} : Lorem ipsum dolor sit amet,
                  </p>
                </div>
                                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to="/categories/bakery/oatmealmuffin"
                    href="#/"
                    className=" fs-4 btn btn-outline-beige1"
                  >
                    View <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle icon={"bi bi-bookmark"}/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0">
                  <div className="col-md-8">
                    <img
                      src="assets/images/categories/IceCream.jpg"
                      height="auto"
                      className="img-fluid float-start" 
                      alt="..."
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">{trendingNow[num[4]].name}</h5>
                      <p className="card-text">
                        Descriptions of the {trendingNow[num[4]].name} : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      </p>
                      <div className="container p-0 row row-cols-auto">
                        {trendingNow[num[4]].tags.map((tags, index)=>(
                          <div key={index} className="bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item">
                          {tags.charAt(0).toUpperCase() + tags.slice(1)}
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to="/categories/bakery/oatmealmuffin"
                    href="#/"
                    className=" fs-4 btn btn-outline-beige1"
                  >
                    View <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle icon={"bi bi-bookmark"}/>
                </div>
              </div>
            </div> 

            <div className="col-md-3">
              <div className="card h-100">
                <img
                  src="assets/images/categories/Sandwiches.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{trendingNow[num[5]].name}</h5>
                  <p className="card-text">
Descriptions of the {trendingNow[num[5]].name} : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
                                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to="/categories/bakery/oatmealmuffin"
                    href="#/"
                    className=" fs-4 btn btn-outline-beige1"
                  >
                    View <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle icon={"bi bi-bookmark"}/>
                </div>
              </div>
            </div>
          </div>

        </div>
        <hr />
      </div>
    </>
  );
}
