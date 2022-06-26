import {Link, useNavigate} from "react-router-dom";

export default function Subsection() {
  let navigate = useNavigate();


  function toComponentB(x){
    console.log({x})
    var hi = ("/"+`${x}`)
    console.log(hi)
    navigate(hi)
  }
  return (
<section className="my-4 my-md-5">
      <h5 className="py-3 mb-3 mb-lg-5 h2 border-bottom border-gray-200">Pick A Choice</h5>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-6" onClick={()=>{toComponentB('bakery')}}>
          <figure className="my-3 my-md-4 text-center card">
            <Link to="/about"  className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </Link>
            <figcaption className="mt-2 mt-md-3" defaultValue={"Seafood"}>
              <a href="#0" className="category-title">Seafood</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Soup</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Pancakes</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Meat</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Chicken</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Less than 30 min</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Pasta</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Pizza</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Cake</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Pastries</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Burger</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Vegan</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Desserts</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Smoothies</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Breakfast</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Salad</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Sandwiches</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Waffles</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Ramen</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <figure className="my-3 my-md-4 text-center card">
            <a href="#0" className="animation rounded-circle">
              <img src="/assets/images/menu11.png" className="rounded-circle" alt="Menu"/>
            </a>
            <figcaption className="mt-2 mt-md-3">
              <a href="#0" className="category-title">Dips</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
    )};