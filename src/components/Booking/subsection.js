import { useNavigate} from "react-router-dom";
import { categoriesPreview } from "../Data/Data";

export default function Subsection() {
  let navigate = useNavigate();


  function toComponentB(x){
    //console.log({x})
    var hi = (`/categories/${x}`)
    //console.log(hi)
    navigate(hi)
  }

  return (
<section className="my-4 my-md-5">
      <h2 className="py-3 mb-3 mb-lg-5 border-bottom border-gray-200">Pick A Choice</h2>
      <div className="row">
        {categoriesPreview.map((recipe,index)=>(
        <div key={index} className="col-lg-3 col-md-4 col-6" title={recipe.title}onClick={()=>{toComponentB(`${(recipe.title).toLowerCase()}`)}}>
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