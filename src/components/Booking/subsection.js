import { useNavigate} from "react-router-dom";

export default function Subsection() {
  let navigate = useNavigate();


  function toComponentB(x){
    console.log({x})
    var hi = (`/categories${x}`)
    console.log(hi)
    navigate(hi)
  }

  const recipes = [
        {
            title: "Italian",
            image: "/img/gallery/img_1.jpg",
            thumbnail: "/assets/images/categories/Italian.jpg",
        }, 
        {
            title: "Halal",
            image: "/img/gallery/img_4.jpg",
            thumbnail: "/assets/images/categories/Halal.jpg",
        },
        {
            title: "Chinese",
            image: "/img/gallery/img_5.jpg",
            thumbnail: "/assets/images/categories/Chinese.jpg",
        },
        {
            title: "Middle Eastern",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Middle_Eastern.jpg",
        },
        {
            title: "Vegan",
            image: "/img/gallery/img_10.jpg",
            thumbnail: "/assets/images/categories/Vegetarian.jpg",
        },
        {
            title: "Desserts",
            image: "/img/gallery/img_1.jpg",
            thumbnail: "/assets/images/categories/Desserts.jpg",
        }, {
            title: "Smoothies",
            image: "/img/gallery/img_4.jpg",
            thumbnail: "/assets/images/categories/Smoothie.jpg",
        },
        {
            title: "Breakfasts",
            image: "/img/gallery/img_5.jpg",
            thumbnail: "/assets/images/categories/Breakfast.jpg",
        },
        {
            title: "Thai",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Thai.jpg",
        },
        {
            title: "Greek",
            image: "/img/gallery/img_10.jpg",
            thumbnail: "/assets/images/categories/Greek.jpg",
        },
        {
            title: "Bakery",
            image: "/img/gallery/img_5.jpg",
            thumbnail: "/assets/images/categories/Bakery.jpg",
        },
        {
            title: "Mexican",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Mexican.jpg",
        },
        {
            title: "Vietnamese",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Vietnamese.jpg",
        },
        {
            title: "BBQ",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/BBQ.jpg",
        },
        {
            title: "Gluten-Friendly",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Gluten-Friendly.jpg",
        },
        {
            title: "Sandwiches",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Sandwiches.jpg",
        },
        {
            title: "French",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/French.jpg",
        },
        {
            title: "Indian",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Indian.jpg",
        },
        {
            title: "Chicken",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Chicken.jpg",
        }
        ,
        {
            title: "Cheap - $20 OR LESS",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Offers_2.png",
        },
        {
            title: "Japanese",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/Japanese.jpg",
        },
        {
            title: "Pizza",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/categories/another/Pizza.jpg",
        }

    ].sort(() => Math.random() - 0.5)

  return (
<section className="my-4 my-md-5">
      <h2 className="py-3 mb-3 mb-lg-5 border-bottom border-gray-200">Pick A Choice</h2>
      <div className="row">
        {recipes.map((recipe,index)=>(
        <div key={index} className="col-lg-3 col-md-4 col-6" title={recipe.title}onClick={()=>{toComponentB('/bakery')}}>
          <figure className="my-3 my-md-4 text-center">
            <div  className="animation rounded-circle">
              <img src={recipe.thumbnail} className="rounded-circle img-fluid"  alt="Menu"/>
            </div>
            <figcaption className="mt-2 mt-md-3" defaultValue={"Seafood"}>
              <a href="#0" className="category-title">{recipe.title}</a>
            </figcaption>
          </figure>
        </div>))}
      </div>
    </section>
    )};