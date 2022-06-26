
export const Headline=()=>{
    return (
      <>
<div id="sales"style={{ backgroundImage:`url(${'assets/images/summerSale.png'})` }}className="alert alert-warning alert-dismissible fade show mb-0" role="alert">
  <i className="bi bi-brightness-high"></i><a href="#promos" className="alert-link">Hot Summer Deals</a> Until Canada Day!<i className="bi bi-brightness-high"></i>
  {/* <img className="img-fluid w-50 d-none d-sm-block" src="assets/images/summerSale.png" alt="" /> */}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </>
);
};

export const Steps=()=>{
    return (
      <><section style={{backgroundColor:"#3A5BA0"}}>
      <div id="steps" style={{backgroundColor:"#3A5BA0"}}className="container-md text-light p-3">

<div className="row">
      <div className="col-lg-3">
        
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-cart-fill" role="img" viewBox="0 0 16 16" >
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/><title>Placeholder</title>
</svg>
        <h2>Order</h2>
        <p><button className="btn btn-secondary"data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">View details »</button></p>
      </div>
      <div className="col-lg-3">
        
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-clock-fill" role="img" viewBox="0 0 16 16" >
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><title>Placeholder</title>
</svg>
        <h2>Book An Appointment</h2>
        <p><button className="btn btn-secondary"data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">View details »</button></p>
      </div>
      <div className="col-lg-3">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-cart-fill" role="img" viewBox="0 0 16 16" >
  <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/><title>Placeholder</title>
</svg>
        <h2>Get the Service you deserve</h2>
        <p><a className="btn btn-secondary" href="/#">View details »</a></p>
      </div>

      <div className="col-lg-3">
        
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-cart-fill" role="img" viewBox="0 0 16 16" >
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/><title>Placeholder</title>
</svg>
        <h2>Happy Customer</h2>
        <p><a className="btn btn-secondary" href="/#">View details »</a></p>
      </div>
    </div>
    </div>
    </section>
    </>
);
};