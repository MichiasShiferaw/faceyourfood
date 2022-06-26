

export default function Promo() {
  return (
    <div id="promos" className="container pt-4 bg-transparent">
<div id="carouselInterval" className="carousel slide carousel-fade justify-content-center align-items-center" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <video className='d-block videoTag' autoPlay loop muted><source src="/assets/images/Promo_Video1.mp4" type='video/mp4' /></video>
      {/* <img src="/assets/images/Promo_Video.mp4" className="img-3" alt="1"/> */}
      {/* <p><a className="btn btn-lg btn-primary" href="#/">Sign up on Your Phone Today</a></p> */}
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="/assets/images/promoImg2.png" className="d-block img-3" alt="2"/>
    </div>
    <div className="carousel-item" data-bs-interval="20000">
        {/* <p className="text-end"><a className="btn btn-lg btn-primary" href="#/">Learn More</a></p> */}
    <img src="/assets/images/summerSale1.png" className="d-block img-3" alt="4"/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
        {/* <p className="text-end"><a className="btn btn-lg btn-primary" href="#/">Learn More</a></p> */}
      <img src="/assets/images/promoImg12.png" className="d-block img-3" alt="3"/>
    </div>


  </div>
  <button  className="carousel-control-prev " type="button" data-bs-target="#carouselInterval" data-bs-slide="prev">
    <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
};