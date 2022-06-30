import { Link } from "react-router-dom"

export default function Pickmuffin() {
  const muffinRecipes = [
        {
            title: "Mixed Berries Muffin",
            //image: "/img/gallery/img_1.png",
            thumbnail: "/assets/images/muffins/1.png",
        },
        {
            title: "Carrot Muffin",
            //image: "/img/gallery/img_5.png",
            thumbnail: "/assets/images/muffins/2.png",
        },
        {
            title: "Rasisn Muffin",
            //image: "/img/gallery/img_6.png",
            thumbnail: "/assets/images/muffins/3.png",
        },
        {
            title: "Blueberry Muffin",
            //image: "/img/gallery/img_4.png",
            thumbnail: "/assets/images/muffins/1.png",
        },
        {
            title: "Triple Mix Muffin",
            //image: "/img/gallery/img_10.png",
            thumbnail: "/assets/images/muffins/4.png",
        },
        {
            title: "Chocolate Chip",
            //image: "/img/gallery/img_1.png",
            thumbnail: "/assets/images/muffins/5.png",
        }, ]



  return (
<div className="vstack gap-3">
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
      <img src="/assets/images/muffins/4.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Oatmeal Muffin</h5>
        <p className="card-text">The <strong>Best</strong> Homemade Muffin In The World. Must Try!</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <Link to='/bakery/oatmealmuffin' className="btn btn-primary stretched-link">View the Recipe</Link>
      </div>
    </div>
  </div>
</div>
{muffinRecipes.map((muffin,index)=>(
        <div className="card mb-3" key={index}>
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
      <img src={muffin.thumbnail} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{muffin.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <a href="#/" className="btn btn-outline-primary disabled">Go to see {muffin.title} Recipe!</a>
      </div>
    </div>
  </div>
</div>
))}
   
</div>
  )};