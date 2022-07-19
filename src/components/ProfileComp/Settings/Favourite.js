import React from 'react'
import { Link } from 'react-router-dom'

function Favourite() {
  return (
    <div><div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-3">
        <div className="col">
          <div className="card shadow-sm">
            <img  width="100%" height="225" src='/assets/images/categories/another/Brisquetta.jpg'/>

            <div className="card-body">
                <h6 className='card-text'>Spicy Brisquetta</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">

                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <small className="text-muted"><i className="bi bi-heart-fill"></i></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
             <img  width="100%" height="225" src='/assets/images/categories/categoriesThumbnail/Halal.jpg'/>

            <div className="card-body">
                <h6 className='card-text'>Shakshuka with chickpeas</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
<Link to="/categories/halal/Shakshuka_with_chickpeas">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  </Link>

                <small className="text-muted"><i className="bi bi-heart-fill"></i></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
             <img  width="100%" height="225" src='/assets/images/categories/categoriesThumbnail/Japanese.jpg'/>

            <div className="card-body">
                <h6 className='card-text'>Presenting</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
<Link to="/categories/halal/Shakshuka_with_chickpeas">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  </Link>
                <small className="text-muted"><i className="bi bi-heart-fill"></i></small>
              </div>
            </div>
          </div>
        </div>
                <div className="col">
          <div className="card shadow-sm">
             <img  width="100%" height="225" src='/assets/images/categories/categoriesThumbnail/Coffee.jpg'/>
            <div className="card-body">
                <h6 className='card-text'>Presenting</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  
                </div>
                <small className="text-muted"><i className="bi bi-heart-fill"></i></small>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default Favourite