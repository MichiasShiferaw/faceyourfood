import { Link } from "react-router-dom";
import { trendingNow } from "../Data/TrendingNow";
import Toggle from "../RecipeComp/Togglelike";
import {useTranslation} from "react-i18next";
function stars(a) {
  let menuItems = [];
  for (let index = 0; index < a; index++) {
    menuItems.push(<i key={index} className="bi bi-star-fill" />);
  }
  return menuItems;
}
export default function Homecomp() {
  const {t} = useTranslation(["homePage"]);
          const adjective=["There's something truly special about "," This simple recipes let the sweet, yet tart flavors of fresh flavours shine bright from a classic ","Amazing is an understatement to ", "Great ","Sweet ","Try the phenomenal ","Of all the things to try, you MUST try "].sort(()=> Math.random()-0.5)
          const closing=["Trust me when I say, it is an unexpected but deliciously addictive flavor. ","See the recipe immediately!", "What are you waiting for? Get Started!", "This recipe could be the talk of your friends and family!"].sort(()=> Math.random()-0.5)
  return (
    
    <section className="p-0 mb-4 mb-md-5">
       <div className="container text-grite">
            <div className="row align-items-center justify-content-between">
                <div className="col-md p-5">
                    <h1>Welcome To Face Your Food</h1>
                    <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Similique deleniti possimus magnam corporis ratione facere!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                        reiciendis eius autem eveniet mollitia, at asperiores suscipit
                        quae similique laboriosam iste minus placeat odit velit quos,
                        nulla architecto amet voluptates?
                    </p>

                    <a href="#trending" className="btn btn-light mt-3 mx-3">
                        <i className="bi bi-chevron-right"></i> Get Started
                    </a>
                                       <Link to="/about" href="#section2" className="btn btn-light mt-3 mx-3">
                        <i className="bi bi-chevron-right"></i> Read More
                    </Link>
                </div>
                <div className="col-md">
                    <img src="/assets/images/faceYourFood.png" className="img-fluid"  alt="Nigga" />
                </div>
            </div>
        </div>
      <div className="pt-3 d-flex align-items-center">
        <hr />
        <h3 className="text-grite">{t("trending")}</h3>
        <hr className="flex-grow-1" />
      </div>
      <div className="row" id="trending">
        <div className="card-group">
          {trendingNow.slice(0, 3).map((food, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 bg-light">
                <figure className="my-1 card">
                  <Link
                    to={`/categories/${(food.category).toLowerCase()}/${(food.name)}`} className="animation rounded-top-6">
                    <img
                      src={food.img}
                      className="w-100"
                      alt="Menu"
                    />
                  </Link>
                  <figcaption className="rating mt-2 px-3 px-lg-4">
                    <div className="w-100 float-left">
                      <div className="float-left">
                        <div className="rating141">{stars(food.rating)}</div>
                      </div>
                    </div>
                    <h5 className="card-title  f-size-25 mt-2 mb-1">
                      <Link to={`/categories/${(food.category).toLowerCase()}/${(food.name)}`} className="text-black d-block mt-1">
                        {food.name}
                      </Link>
                    </h5>
                  </figcaption>
                </figure>
                <div className="card-body">
                  <p className="card-text">
                    {adjective[index ]}
                    {food.name}
                    {closing[index]}
                  </p>

                  <div className="container p-0 ">
                    {" "}
                    <div className="row row-cols-auto">
                      {food.tags.map((tags, index) => (
                        <div
                          key={index * 200}
                          className="tags bg-darkness text-white rounded-pill m-1 p-2 d-inline-block search-item"
                        >
                          {tags.charAt(0).toUpperCase() + tags.slice(1)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" fs-3 card-footer d-flex justify-content-between align-items-center">
                  <Link
                    to={`/categories/${(food.category).toLowerCase()}/${(food.name)}`}
                    className="fs-4 btn btn-outline-secondary"
                  >
                    {t("view")} <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  <Toggle className="bg-success" icon={"bi bi-heart"}/>
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
