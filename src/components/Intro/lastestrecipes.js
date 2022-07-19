import React from 'react';
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';

export default function Portiontwo() {
   const {t} = useTranslation(["homePage"]);

  return (
    <>
    <section className="my-4 my-md-5">
      <div className="row">
        <div className="col-md-8">
          
          <h1 className="mt-3 mb-4 text-white"> {t("latestRecipes")} </h1>
          <figure className="my-3 border">
            <img src="assets/images/muffins/Moussaka.png" className="w-100 rounded-top-12" alt="Menu"/>
            <figcaption className="bg-transparent px-4 px-lg-5 pt-4 mb-4 collection border-top-0 rounded-bottom-6">
              <div className="w-100 float-left my-3">
                <div className="float-left">
                </div>
              </div>
              <h6 className=" mt-2 mb-3"><Link to="/Arroz_non_pollo" className="text-black">Arroz non pollo</Link></h6>
              <p className="font-weight-medium">This simple chicken marinade infuses the classic BBQ flavour along with, garlic and oregano plus marinating chicken in yogurt for a more tender bite.</p>
            </figcaption>
          </figure>
          <hr/>
<div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Snickerdoodle mug cake. <span className="text-muted">The Cake that keeps on giving.</span></h2>
        <p className="lead">Check Out this cake that will have you raving to your friends and family.</p>
                        <Link
                    to="/categories/desserts/Snickerdoodle_mug_cake"
                    
                    className="fs-4 btn btn-outline-secondary"
                  >
                    {t("view")} <i className="bi bi-caret-right-fill"></i>
                  </Link>
      </div>
      <div className="col-md-5">
        <img src="assets/images/snickerdoodlemugcake.png" className="img-fluid rounded-start" alt="..."/>
      </div>
    </div>
    <hr/>
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">Wild Mushroom Risotto.</h2>
        <p className="lead">Need a meal to impress someone. Try the Risotto, easy, quick and looks amazing! </p>
        <Link
                    to="/categories/bbq/Wild_Mushroom_Risotto"
                    
                    className="fs-4 btn btn-outline-secondary"
                  >
                    {t("view")} <i className="bi bi-caret-right-fill"></i>
                  </Link>
      </div>
      <div className="col-md-5 order-md-1">
       
<img src="/assets/images/categories/categoriesThumbnail/BBQ.jpg" className="img-fluid rounded-start" alt="..."/>
      </div>
    </div>

        </div>
        <div className="col-md-4 text-decoration-none bg-transparent">
          <h4 className="mt-3 mt-xl-4 pt-3 pt-xl-4 mb-2 text-white">{t("freshFavRecipes")}</h4>
          <div className="row h-100">
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="/assets/images/categories/another/Pizza.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="#/">Homemade Chicago Style Pizza</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Chicken.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="/Oregano_Marinated_Chicken">Oregano Marinated Chicken</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Thai.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="/Thai_Vegetable_Stir-fry">Thai Vegetable Stir-fry</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Desserts.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="/Salted_caramel_six_layer_chocolate_cake">Salted caramel six layer chocolate cake</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Mexican.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="/Black_bean_and_cheese_tacos">Black bean and cheese tacos</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Smoothie.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="#/">Berry Smoothies</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Coffee.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="#/">Amazin' Low-Cafe Coffee</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Breakfast.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="#/">Broccoli and Mozzarella Pizza</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Vietnamese.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="#/">Spicy Pho</Link></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <Link to="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Indian.jpg" className="w-100" alt="Menu"/>
                </Link>
                <figcaption className="bg-transparent pt-2">
                  <h6 className=" small"><Link to="#/">Chicken Tikka Masala</Link></h6>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>)};