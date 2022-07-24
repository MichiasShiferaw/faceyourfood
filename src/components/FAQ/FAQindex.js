import React from 'react'
import { Link } from 'react-router-dom'

function FAQindex() {
  return (
    <div className='container my-5 text-decoration-none'>
                    {/* <nav aria-label="breadcrumb ">
                <ol className="breadcrumb">
                  <Link to="/" className="breadcrumb-item text-decoration-none text-grite">
                    Home
                  </Link>
                 
                  <li className="breadcrumb-item active text-decoration-none" aria-current="page">
                    FAQ
                  </li>
                </ol>
              </nav> */}
              <div>
                <img className="mb-4 d-block mx-auto" src="/assets/images/faceYourFood.png" alt="" width="126" height="100"/>
                <h1 className="h2 text-center p-2 text-grite">Frequently Asked Questions (FAQs) </h1>


              </div>
        
        
        <div className='row align-items-center'>
          <div className="col-lg-2"></div>
        <div className='col-lg-8'>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed bg-beige2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       I commented on one of your recipes and am wondering why it hasn’t been posted.
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">I love engaging with readers and only approve comments that add value to the recipe page. All comments are filtered for spam and I don’t post anything derogatory or rude. I also do not post comments with links in them.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed bg-beige2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Is there a way to print out your recipes
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">If you look above the list of ingredients on each recipe you will see a print button. Click that and you should be good to go.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed bg-beige2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Where can I find nutritional information on your recipes?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Nutritional information is provided with each recipe, but only as an estimate because cooking methods can change this, as well as the brands used. Content found on HowToCook.recipes is not meant as medical advice or information. You are welcome to use various nutritional calculators found online. All you have to do is copy the link to the recipe in their address bar to get the nutritional information you need. You don’t even have to specify the ingredients! It couldn’t be easier.</div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed bg-beige2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
       Can I double the recipe? 
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">In most situations where the recipe is baked in an 8×8-inch square pan, it will double fine being baked in 9×13-inch pan. Most of my bars and cakes are baked in 8×8 pans, but if there’s a 9×9-inch recipe that you want to double, it could be a tight fit in a 9×13 pan.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed bg-beige2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
       Forgot Password
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Give up.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSix">
      <button className="accordion-button collapsed bg-beige2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
       Can I use margarine in place of butter?
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Probably not. It’s too watery and doesn’t behave like butter. I would suggest vegan butter such as Earth Balance sticks rather than margarine, but real butter is all I bake with when I call for butter in my recipes and using anything else can be a big gamble.</div>
    </div>
  </div>
    
    

</div>
</div>
          <div className="col-lg-2"></div>
          </div>
</div>
  )
}

export default FAQindex