import Recommended from "./recommendation";
import Reviews from "./Reviews/Reviews";
import { Link } from "react-router-dom";
import Toggle from "./Togglelike";
import { useTranslation } from "react-i18next";

function stars(a) {
  let menuItems = [];
  for (let index = 0; index < a; index++) {
    menuItems.push(<i key={index} className="bi bi-star-fill" />);
    // console.log(a)
  }
  return menuItems;
}

export default function Recipe({ currRecipe }) {
  const { t } = useTranslation(["recipesPage"]);
  return (
    <section className="p-0">
      <div className="container">
        <section className="my-4 my-md-5">
          <div>
            <div className="order-sm-2 ms-auto">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <Link to="/categories" className="breadcrumb-item">
                    {t("categories")}
                  </Link>
                  <Link
                    to={`/categories/${currRecipe.category}`}
                    className="breadcrumb-item"
                  >
                    {currRecipe.category.charAt(0).toUpperCase() +
                      currRecipe.category.slice(1)}
                  </Link>
                  {/* <li className="breadcrumb-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#/">Muffins</a></li> */}
                  <li className="breadcrumb-item active" aria-current="page">
                    {currRecipe.name}
                  </li>
                </ol>
              </nav>

              {/* <div className="row">
            <div className="col-sm-6 col-md-8">
              
 <h1 className="display-4 recipeheader"><strong>{currRecipe.name}</strong>
 
             
           </h1> 
           </div>
           <div className="col-6 col-md-4 p-0">
              <span className="ms-2 pe-3 display-4"><Toggle className="pe-3 display-4" icon={"bi bi-heart"}/> </span>
           <a href="#0"><i className="bi bi-download px-3 display-4"></i></a>
           <span className="display-6 ms-auto me-4 px-3">
              {stars(currRecipe.rating)}
              
              </span>
          </div>
          
          </div> */}

              <div className="d-flex justify-content-between">
                <div>
                  <h1 className=" display-5 recipeheader text-grite">
                    <strong>
                      {currRecipe.name}{" "}
                      <span className="h4" id="altRates">
                        {currRecipe.rating}/5
                      </span>{" "}
                    </strong>
                    <span className="col display-5">
                      <Toggle className="pe-3 display-5" icon={"bi bi-heart"} />{" "}
                    </span>
                  </h1>
                </div>
                <div className="row row-cols-auto">
                  <div className="col m-0 p-0">
                    <i className="bi bi-download text-forgreen display-5"></i>
                  </div>
                  <div
                    id="starsRates"
                    className="starsRates col display-5 row row-cols-1 row-cols-sm-2 row-cols-md-4"
                  >
                    {stars(currRecipe.rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-detail pb-0 mb-0">
            <hr style={{ height: "5px" }} />
            <p className="pb-0 mb-0 text-grite">
              <em>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </em>
            </p>
            <br />
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner ">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src="/assets/images/muffins/1.png"
                    className="d-block w-175 img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-grite">
                      {currRecipe.name} Within 30 Minutes!
                    </h5>
                    <p className="text-grite">
                      The low calories will make the {currRecipe.name} an
                      amazing option! {currRecipe.calories} (cal)
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="/assets/images/muffins/2.png"
                    className="d-block w-175 img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-grite">
                      Have the meal as a Sunday suprise, or even together with
                      the family
                    </h5>
                    <p className="text-grite">The opportunity is endless!</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/muffins/3.png"
                    className="d-block w-175 img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-grite">
                      {currRecipe.name} falls in the {currRecipe.category}{" "}
                      section as it contains alot of the ingredients used in
                      similar dishes.
                    </h5>
                    <p className="text-grite">Get Started on the Recipe!</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <br />
            {/* <div className="d-flex justify-content-between mt-0 mt-md-5"> */}
            <div className="row mt-0 mt-md-5">
              <div className="col-md-12">
                <ul className="list-unstyled component-list fyf-svg display-flex">
                  <li>
                    <small>{t("Preptime")}: </small>
                    <span>
                      <strong>{currRecipe.preptime} mins</strong>
                    </span>
                  </li>
                  <li>
                    <small>{t("cookingtime")}: </small>
                    <span>
                      <strong>{currRecipe.cooktime} min</strong>
                    </span>
                  </li>
                  <li>
                    <small>{t("servings")}: </small>
                    <span title="Serving of An Average Adult">
                      <strong>
                        {currRecipe.servings} People
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fillRule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </strong>
                    </span>
                  </li>
                  <li>
                    <a href="#0" title="Print Page" className="text-grite">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-printer-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div
                  id="ingredients"
                  className="ingredientssect mt-4 mt-md-5 bg-secondary bg-opacity-25"
                >
                  <h3 className="ps-2">
                    <strong>{t("ingredients")}</strong>
                  </h3>
                  <div className="checklist pb-2">
                    <strong className="ps-4">{t("firstPart")}</strong>
                    {currRecipe["ingredients"].map((ingred, index) => (
                      <div
                        key={index}
                        className="form-check form-check-rounded mx-5 recipe-checkbox"
                      >
                        <input
                          type="checkbox"
                          id={index}
                          name={index}
                          className="form-check-input rounded-circle"
                        />
                        <label
                          className="form-check-label strikethrough"
                          htmlFor={index}
                        >
                          {ingred}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="checklist pb-2">
                    <strong className="ps-4">{t("secondPart")}</strong>
                    {currRecipe["ingredients"].map((ingred, index) => (
                      <div
                        key={index}
                        className="form-check form-check-rounded mx-5 recipe-checkbox"
                      >
                        <input
                          type="checkbox"
                          id={index}
                          name={index}
                          className="form-check-input rounded-circle"
                        />
                        <label
                          className="form-check-label strikethrough"
                          htmlFor={index}
                        >
                          {ingred}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row mt-4 g-0 bg-forgreen text-grite">
                  {/* <div className="col-lg-10"> */}
                  <div className="rounded-12 p-4">
                    <h3>{t("nutritionFacts")}</h3>
                    <div className="table-responsive">
                      <table className="table nutrition-list table-bordered text-grite">
                        <thead>
                          <tr>
                            <th scope="col">Fact</th>
                            <th scope="col">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">{t("calories")}</th>
                            <td>{currRecipe.calories}</td>
                          </tr>
                          <tr>
                            <th scope="row">{t("totalFat")}</th>
                            <td>{currRecipe.fat}</td>
                          </tr>
                          <tr>
                            <th scope="row">{t("saturatedFat")}</th>
                            <td>{currRecipe.satfat}</td>
                          </tr>
                          <tr>
                            <th scope="row">{t("fiber")}</th>
                            <td>{currRecipe.fiber}</td>
                          </tr>
                          <tr>
                            <th scope="row">{t("sodium")}</th>
                            <td>{currRecipe.satfat}</td>
                          </tr>
                          <tr>
                            <th scope="row">{t("sugars")}</th>
                            <td>{currRecipe.sugar}</td>
                          </tr>
                          <tr>
                            <th scope="row">{t("protein")}</th>
                            <td>{currRecipe.protein}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className="col-md-6">
                <div className="mt-5">
                  <h3>{t("instructions")}</h3>
                  <ul
                    id="instructions"
                    className="instruction-list list-unstyled ps-0 mt-5"
                  >
                    <li className="d-flex align-items-start text-align-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        1
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex align-items-start text-align-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        2
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex align-items-start text-align-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        3
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex align-items-start text-align-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        4
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex align-items-start text-align-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        5
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex align-items-start text-align-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        6
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex align-items-start text-align-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        7
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex  text-align-start align-items-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        8
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="d-flex align-items-start">
                      <span className="badge bg-forgreen rounded-pill mx-5">
                        9
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback my-0 my-md-5 py-1 py-md-5 text-center">
            <h1 className="mb-3">{t("already")}</h1>
            <a
              href="#reviewtitle"
              className="btn btn-outline-dark my-2 py-2 px-5"
            >
              {t("shareFeedback")}
            </a>
            <br />
            <br />
            <hr className="lh-lg" />
          </div>
          <Reviews />
        </section>
        <Recommended />
      </div>
    </section>
  );
}
