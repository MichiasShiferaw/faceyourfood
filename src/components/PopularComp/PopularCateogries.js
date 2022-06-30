


export default function Pop1() {
  var index1=0;
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
        }

    ].sort(() => Math.random() - 0.5)

  return (
  <section className="pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="mb-2">Popular Categories </h3>
      </div>
      <div className="col-6 text-end">
        <a className="btn btn-outline-primary mb-2 mr-1" data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
          <i className="bi bi-arrow-left"></i>
        </a>
        <button className="btn btn-outline-primary mb-2 " data-bs-target="#carouselExampleIndicators2" data-bs-slide="next" role="button">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      <div className="col-12">
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                
{recipes.slice(0,6).map((recipe, index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                  
                    <figure key={index} className="my-3 text-center">
            <a href="#/" className="animation rounded-circle">
              <img src={recipe.thumbnail} className="rounded-circle img-fluid" alt="Menu"/>
            </a>
            <figcaption className="mt-2">
              <a href="#/" className="category-title">{recipe.title}</a>
            </figcaption>
          </figure>


                  
        </div>))}
                
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
{recipes.slice(7,13).map((recipe,index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                  
                    <figure key={index} className="my-3 text-center">
            <a href="#/" className="animation rounded-circle">
              <img src={recipe.thumbnail} className="rounded-circle img-fluid" alt="Menu"/>
            </a>
            <figcaption className="mt-2">
              <a href="#/" className="category-title">{recipe.title}</a>
            </figcaption>
          </figure>           
        </div>))}
                
              </div>
            </div>
                        <div className="carousel-item">
              <div className="row">
                {recipes.slice(14,20).map((recipe, index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                  
                    <figure key={index} className="my-3 text-center">
            <a href="#/" className="animation rounded-circle">
              <img src={recipe.thumbnail} className="rounded-circle img-fluid" alt="Menu"/>
            </a>
            <figcaption className="mt-2">
              <a href="#/" className="category-title">{recipe.title}</a>
            </figcaption>
          </figure>           
        </div>    ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)};