


export default function Pop1() {
  const recipes = [
        {
            title: "Pizza",
            image: "/img/gallery/img_1.jpg",
            thumbnail: "/assets/images/menu11.png",
        }, 
        {
            title: "Indian",
            image: "/img/gallery/img_4.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Chinese",
            image: "/img/gallery/img_5.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Pasta",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Vegan",
            image: "/img/gallery/img_10.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Desserts",
            image: "/img/gallery/img_1.jpg",
            thumbnail: "/assets/images/menu11.png",
        }, {
            title: "Smoothies",
            image: "/img/gallery/img_4.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Breakfasts",
            image: "/img/gallery/img_5.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "British",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Greek",
            image: "/img/gallery/img_10.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Soup & Salad",
            image: "/img/gallery/img_5.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Mexican",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Happy Hour",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "BBQ",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Southern",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Sandwiches",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "French",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
        },
        {
            title: "Cheap",
            image: "/img/gallery/img_6.jpg",
            thumbnail: "/assets/images/menu11.png",
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
                  
                    <figure key={index} className="my-3 text-center card">
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

            <div className="carousel-item active">
              <div className="row">
{recipes.slice(6,12).map((recipe, index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                  
                    <figure key={index} className="my-3 text-center card">
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
                        <div className="carousel-item active">
              <div className="row">
{recipes.slice(12,18).map((recipe, index)=>(
                <div className="col-lg-2 col-md-4 col-4">
                  
                    <figure key={index} className="my-3 text-center card">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)};