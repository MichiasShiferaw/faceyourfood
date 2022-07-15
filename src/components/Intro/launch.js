import { Link } from "react-router-dom";
import { trendingNow } from "../Data/TrendingNow";
import Toggle from "../RecipeComp/Togglelike";

function stars(a) {
  let menuItems = [];
  for (let index = 0; index < a; index++) {
    menuItems.push(<i key={index} className="bi bi-star-fill" />);
    // console.log(a)
  }
  return menuItems;
}
export default function Launch() {
  return (
    <section className="p-0 mb-4 mb-md-5">
      <div className="pt-3 d-flex align-items-center">
        <hr />
        <h3 className="">Trending This Week</h3>
        <hr className="flex-grow-1" />
      </div>
      <div className="row">
        <div className="card-group">
          {trendingNow.slice(0, 3).map((food, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 bg-light">
                <figure className="my-1 card">
                  <a href="#0" className="animation rounded-top-6">
                    <img
                      src="assets/images/muffins/1.png"
                      className="w-100"
                      alt="Menu"
                    />
                  </a>
                  <figcaption className="rating mt-2 px-3 px-lg-4">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="rating141">{stars(food.rating)}</div>
                      </div>
                    </div>
                    <h5 className="card-title  f-size-25 mt-2 mb-1">
                      <a href="#0" className="text-black d-block mt-1">
                        {food.name}
                      </a>
                    </h5>
                  </figcaption>
                </figure>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <div className="container p-0 ">
                    {" "}
                    <div className="row row-cols-auto">
                      {food.tags.map((tags, index) => (
                        <div
                          key={index * 200}
                          className="tags bg-darkturq text-white rounded-pill m-1 p-2 d-inline-block search-item"
                        >
                          {tags.charAt(0).toUpperCase() + tags.slice(1)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to="/categories/bakery/oatmeal_muffin"
                    href="#/"
                    className=" fs-4 btn btn-outline-beige1"
                  >
                    View <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle icon={"bi bi-bookmark"}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-5" style={{ height: "5px" }} />
    </section>
  );
}

// stretched-link