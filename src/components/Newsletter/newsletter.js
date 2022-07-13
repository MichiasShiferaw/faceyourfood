import React from 'react'

function Newsletter() {
  return (
    <section className="newlettersect bg-light text-dark p-5">
        <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
                <h3 className="mb-3 mb-md-0">Love the content? <br/> Sign Up For FYF Newsletter</h3>
                <img src='/assets/images/chef.gif' height={'80px'} alt='Cooking'/>
                <div className="input-group news-input ms-5">
                    <input type="text" className="form-control" placeholder="Enter Email" />
                    <button className="btn btn-dark btn-lg" type="button" onClick={()=>{console.log('Signedup');}}>Add</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter