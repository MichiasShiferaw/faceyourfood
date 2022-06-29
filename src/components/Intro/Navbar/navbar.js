import {useNavigate, useParams,Link} from "react-router-dom";

export default function NavBar (){
  let navigate = useNavigate();
    return(

<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="/home"><span style={{color:"#FFA500"}}><img src="/assets/images/Logo2.png" height={'24px'} alt="FaceYourFood"/></span>  FaceYourFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Popular Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#services">Chinese</a></li>
            <li><a className="dropdown-item" href="#prices">Seafood</a></li>
            <li><a className="dropdown-item" href="#prices">Breakfast</a></li>
            <li><a className="dropdown-item" href="#prices">Lunch</a></li>
            <li><a className="dropdown-item" href="#prices">Dinner</a></li>
          </ul>
        </li>
        <div className="d-flex" >
        <a className="btn btn-primary text-white" href="#login" type="button"><i className="bi bi-person-circle"></i>  Sign In</a>

      </div>
      </ul>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <form className="d-flex ms-4">
        <button style={{backgroundColor:"#1F4690"}}className="btn text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><strong><i className="bi bi-plus-lg"></i> See More</strong></button>
      </form>
    </div>
  </div>
</nav>
        

    )};

