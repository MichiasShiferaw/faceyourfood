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
            <figcaption className="bg-white px-4 px-lg-5 pt-4 mb-4 collection border-top-0 rounded-bottom-6">
              <div className="w-100 float-left my-3">
                <div className="float-left">
                </div>
              </div>
              <h6 className=" mt-2 mb-3"><a href="#0" className="text-black">Sloppy Joe</a></h6>
              <p className="font-weight-medium">Description of the meal above will be placed here.</p>
            </figcaption>
          </figure>
          <hr/>
<div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Snickerdoodle mug cake. <span className="text-muted">The Cake that keeps on giving.</span></h2>
        <p className="lead">Check Out this cake that will have you raving to your friends and family.</p>
                        <Link
                    to="/categories/desserts/Snickerdoodle_mug_cake"
                    href="#/"
                    className="fs-4 btn btn-outline-stitch"
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
        <h2 className="featurette-heading fw-normal lh-1">Lorem ipsum dolor sit amet. <span className="text-muted">ut labore et dolore magna.</span></h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className="col-md-5 order-md-1">
       
<img src="/assets/images/categories/categoriesThumbnail/BBQ.jpg" className="img-fluid rounded-start" alt="..."/>
      </div>
    </div>

        </div>
        <div className="col-md-4">
          <h4 className="mt-3 mt-xl-4 pt-3 pt-xl-4 mb-2 text-white">{t("freshFavRecipes")}</h4>
          <div className="row h-100">
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="/assets/images/categories/another/Pizza.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Homemade Chicago Style Pizza</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Chicken.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Lorem, ipsum dolor sit amet</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Thai.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Easy Chocolate Chip Muffins</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Desserts.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Lorem, ipsum dolor sit amet</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Mexican.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Lorem Geneus</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Smoothie.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Berry Smoothies</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Coffee.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Amazin' Low-Cafe Coffee</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Breakfast.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Broccoli and Mozzarella Pizza</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Vietnamese.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Spicy Pho</a></h6>
                </figcaption>
              </figure>
            </div>
            <div className="col-6">
              <figure className="my-3 text-center card">
                <a href="#/" className="animation">
                  <img src="assets/images/categories/categoriesThumbnail/Indian.jpg" className="w-100" alt="Menu"/>
                </a>
                <figcaption className="bg-white pt-2">
                  <h6 className=" small"><a href="#/">Chicken Tikka Masala</a></h6>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>)};